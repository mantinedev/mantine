(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52097],{45983:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return o(83215)}])},83215:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>w});var n=o(31085),t=o(71184),a=o(76644);let i={type:"configurator",component:function(e){return(0,n.jsx)(a.E,{...e,children:"Badge"})},code:`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]},l={type:"configurator",component:function(e){return(0,n.jsx)(a.E,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient badge"})},code:e=>`
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`,centered:!0,controls:o(61866).n};var d=o(56051);let c={type:"code",component:function(){return(0,n.jsxs)(d.Y,{children:[(0,n.jsx)(a.E,{size:"xs",circle:!0,children:"1"}),(0,n.jsx)(a.E,{size:"sm",circle:!0,children:"7"}),(0,n.jsx)(a.E,{size:"md",circle:!0,children:"9"}),(0,n.jsx)(a.E,{size:"lg",circle:!0,children:"3"}),(0,n.jsx)(a.E,{size:"xl",circle:!0,children:"8"})]})},code:`
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="xs" circle>
        1
      </Badge>
      <Badge size="sm" circle>
        7
      </Badge>
      <Badge size="md" circle>
        9
      </Badge>
      <Badge size="lg" circle>
        3
      </Badge>
      <Badge size="xl" circle>
        8
      </Badge>
    </Group>
  );
}
`,centered:!0};var s=o(32653);let g={type:"code",component:function(){let e=(0,n.jsx)(s.A,{size:12});return(0,n.jsxs)(d.Y,{children:[(0,n.jsx)(a.E,{leftSection:e,children:"With left section"}),(0,n.jsx)(a.E,{rightSection:e,children:"With right section"})]})},centered:!0,code:`
import { Badge, Group } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`},u={type:"code",component:function(){return(0,n.jsx)(a.E,{fullWidth:!0,children:"Full width badge"})},code:`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`};var p=o(26762),m=o(81754),h=o(16560),v=o(69842),f=o(92408);let x=e=>{let r=(0,p.v)(e),o=(0,m.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,h.B)(o.value,.1),hover:(0,h.B)(o.value,.15),border:`1px solid ${o.value}`,color:(0,v.e)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},b={type:"code",component:function(){return(0,n.jsx)(f.nW,{theme:{variantColorResolver:x},children:(0,n.jsxs)(d.Y,{children:[(0,n.jsx)(a.E,{color:"lime.4",variant:"filled",size:"lg",children:"Lime filled"}),(0,n.jsx)(a.E,{color:"orange",variant:"light",size:"lg",children:"Orange light"}),(0,n.jsx)(a.E,{variant:"danger",size:"lg",children:"Danger"})]})})},centered:!0,defaultExpanded:!1,code:`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  Badge,
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
        <Badge color="lime.4" variant="filled">
          Lime filled
        </Badge>

        <Badge color="orange" variant="light">
          Orange light
        </Badge>

        <Badge variant="danger">
          Danger
        </Badge>
      </Group>
    </MantineProvider>
  );
}
`},j={type:"code",component:function(){return(0,n.jsxs)(d.Y,{children:[(0,n.jsx)(a.E,{size:"lg",color:"lime.4",children:"Default"}),(0,n.jsx)(a.E,{autoContrast:!0,size:"lg",color:"lime.4",children:"Auto contrast"})]})},code:`
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="lg" color="lime.4">
        Default
      </Badge>
      <Badge autoContrast size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}
`,centered:!0};var B=o(88607);let y=`
import { Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`,C={type:"styles-api",data:B.i,component:function(e){let r=(0,n.jsx)(s.A,{size:12});return(0,n.jsx)(a.E,{leftSection:r,rightSection:r,...e,children:"Badge component"})},centered:!0,code:y};var z=o(85954),E=o(38215);let _=(0,z.P)(E.XZ.Badge);function k(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.R)(),...e.components},{AutoContrast:o,Demo:a,Gradient:d,Polymorphic:s,StylesApiSelectors:p}=r;return o||V("AutoContrast",!0),a||V("Demo",!0),d||V("Gradient",!0),s||V("Polymorphic",!0),p||V("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:i}),"\n",(0,n.jsx)(d,{component:"Badge"}),"\n",(0,n.jsx)(a,{data:l}),"\n",(0,n.jsx)(r.h2,{id:"rounded",children:"Rounded"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"circle"})," prop, to reduce horizontal padding and make badge width equal to its height:"]}),"\n",(0,n.jsx)(a,{data:c}),"\n",(0,n.jsx)(r.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,n.jsx)(a,{data:g}),"\n",(0,n.jsx)(r.h2,{id:"full-width",children:"Full width"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,n.jsxs)(r.p,{children:["You can customize colors for ",(0,n.jsx)(r.code,{children:"Badge"})," and other components variants by adding\n",(0,n.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,n.jsx)(a,{data:b}),"\n",(0,n.jsx)(o,{component:"Badge"}),"\n",(0,n.jsx)(a,{data:j}),"\n",(0,n.jsx)(p,{component:"Badge"}),"\n",(0,n.jsx)(a,{data:C}),"\n",(0,n.jsx)(s,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,{...e,children:(0,n.jsx)(k,{...e})})}function V(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,r,o)=>{"use strict";o.d(r,{A:()=>n});var n=(0,o(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},61866:(e,r,o)=>{"use strict";o.d(r,{n:()=>n});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},76644:(e,r,o)=>{"use strict";o.d(r,{E:()=>m});var n=o(31085);o(14041);var t=o(33450),a=o(7098),i=o(51606),l=o(29686),d=o(69564),c=o(34056),s=o(2453),g={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let u={},p=(0,a.V)((e,{radius:r,color:o,gradient:n,variant:a,size:l,autoContrast:d})=>{let c=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:a||"filled",autoContrast:d});return{root:{"--badge-height":(0,t.YC)(l,"badge-height"),"--badge-padding-x":(0,t.YC)(l,"badge-padding-x"),"--badge-fz":(0,t.YC)(l,"badge-fz"),"--badge-radius":void 0===r?void 0:(0,t.nJ)(r),"--badge-bg":o||a?c.background:void 0,"--badge-color":o||a?c.color:void 0,"--badge-bd":o||a?c.border:void 0,"--badge-dot-color":"dot"===a?(0,i.r)(o,e):void 0}}}),m=(0,s.v)((e,r)=>{let o=(0,l.Y)("Badge",u,e),{classNames:t,className:a,style:i,styles:s,unstyled:m,vars:h,radius:v,color:f,gradient:x,leftSection:b,rightSection:j,children:B,variant:y,fullWidth:C,autoContrast:z,circle:E,mod:_,...k}=o,w=(0,d.I)({name:"Badge",props:o,classes:g,className:a,style:i,classNames:t,styles:s,unstyled:m,vars:h,varsResolver:p});return(0,n.jsxs)(c.a,{variant:y,mod:[{block:C,circle:E,"with-right-section":!!j,"with-left-section":!!b},_],...w("root",{variant:y}),ref:r,...k,children:[b&&(0,n.jsx)("span",{...w("section"),"data-position":"left",children:b}),(0,n.jsx)("span",{...w("label"),children:B}),j&&(0,n.jsx)("span",{...w("section"),"data-position":"right",children:j})]})});m.classes=g,m.displayName="@mantine/core/Badge"}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,39699,68831,90636,46593,38792],()=>r(45983)),_N_E=e.O()}]);
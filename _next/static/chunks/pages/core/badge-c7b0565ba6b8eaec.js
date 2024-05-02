(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25110],{35661:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var t=(0,o(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},65879:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return o(25448)}])},25448:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return P}});var t=o(52322),n=o(45392),i=o(32581);let a=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,l={type:"configurator",component:function(e){return(0,t.jsx)(i.C,{...e,children:"Badge"})},code:a,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var d=o(63048);let c={type:"configurator",component:function(e){return(0,t.jsx)(i.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient badge"})},code:e=>`
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
`,centered:!0,controls:d.P};var s=o(93010);let u=`
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
`,g={type:"code",component:function(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.C,{size:"xs",circle:!0,children:"1"}),(0,t.jsx)(i.C,{size:"sm",circle:!0,children:"7"}),(0,t.jsx)(i.C,{size:"md",circle:!0,children:"9"}),(0,t.jsx)(i.C,{size:"lg",circle:!0,children:"3"}),(0,t.jsx)(i.C,{size:"xl",circle:!0,children:"8"})]})},code:u,centered:!0};var m=o(35661),p=o(58898);let h=`
import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`,f={type:"code",component:function(){let e=(0,t.jsx)(m.Z,{style:{width:(0,p.h)(12),height:(0,p.h)(12)}});return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.C,{leftSection:e,children:"With left section"}),(0,t.jsx)(i.C,{rightSection:e,children:"With right section"})]})},centered:!0,code:h},v=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,x={type:"code",component:function(){return(0,t.jsx)(i.C,{fullWidth:!0,children:"Full width badge"})},code:v};var b=o(9197),j=o(46403),B=o(20754),C=o(8943),y=o(68755);let _=`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  Badge,
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
`,z=e=>{let r=(0,b.B)(e),o=(0,j.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,B.m)(o.value,.1),hover:(0,B.m)(o.value,.15),border:`${(0,p.h)(1)} solid ${o.value}`,color:(0,C._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},w={type:"code",component:function(){return(0,t.jsx)(y.M2,{theme:{variantColorResolver:z},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.C,{color:"lime.4",variant:"filled",size:"lg",children:"Lime filled"}),(0,t.jsx)(i.C,{color:"orange",variant:"light",size:"lg",children:"Orange light"}),(0,t.jsx)(i.C,{variant:"danger",size:"lg",children:"Danger"})]})})},centered:!0,defaultExpanded:!1,code:_},k=`
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
`,V={type:"code",component:function(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.C,{size:"lg",color:"lime.4",children:"Default"}),(0,t.jsx)(i.C,{autoContrast:!0,size:"lg",color:"lime.4",children:"Auto contrast"})]})},code:k,centered:!0};var D=o(29960);let G=`
import { Badge, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`,E={type:"styles-api",data:D.o,component:function(e){let r=(0,t.jsx)(m.Z,{style:{width:(0,p.h)(12),height:(0,p.h)(12)}});return(0,t.jsx)(i.C,{leftSection:r,rightSection:r,...e,children:"Badge component"})},centered:!0,code:G};var R=o(79016),S=o(33638);let A=(0,R.A)(S.us.Badge);function T(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{AutoContrast:o,Demo:i,Gradient:a,Polymorphic:d,StylesApiSelectors:s}=r;return o||Z("AutoContrast",!0),i||Z("Demo",!0),a||Z("Gradient",!0),d||Z("Polymorphic",!0),s||Z("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i,{data:l}),"\n",(0,t.jsx)(a,{component:"Badge"}),"\n",(0,t.jsx)(i,{data:c}),"\n",(0,t.jsx)(r.h2,{id:"rounded",children:"Rounded"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"circle"})," prop, to reduce horizontal padding and make badge width equal to its height:"]}),"\n",(0,t.jsx)(i,{data:g}),"\n",(0,t.jsx)(r.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,t.jsx)(i,{data:f}),"\n",(0,t.jsx)(r.h2,{id:"full-width",children:"Full width"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,t.jsx)(i,{data:x}),"\n",(0,t.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,t.jsxs)(r.p,{children:["You can customize colors for ",(0,t.jsx)(r.code,{children:"Badge"})," and other components variants by adding\n",(0,t.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,t.jsx)(i,{data:w}),"\n",(0,t.jsx)(o,{component:"Badge"}),"\n",(0,t.jsx)(i,{data:V}),"\n",(0,t.jsx)(s,{component:"Badge"}),"\n",(0,t.jsx)(i,{data:E}),"\n",(0,t.jsx)(d,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(A,{...e,children:(0,t.jsx)(T,{...e})})}function Z(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63048:function(e,r,o){"use strict";o.d(r,{P:function(){return t}});let t=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},32581:function(e,r,o){"use strict";o.d(r,{C:function(){return p}});var t=o(52322);o(2784);var n=o(91482),i=o(11200),a=o(13588),l=o(38483),d=o(46690),c=o(28559),s=o(33502),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let g={},m=(0,i.Z)((e,{radius:r,color:o,gradient:t,variant:i,size:l,autoContrast:d})=>{let c=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:t,variant:i||"filled",autoContrast:d});return{root:{"--badge-height":(0,n.ap)(l,"badge-height"),"--badge-padding-x":(0,n.ap)(l,"badge-padding-x"),"--badge-fz":(0,n.ap)(l,"badge-fz"),"--badge-radius":void 0===r?void 0:(0,n.H5)(r),"--badge-bg":o||i?c.background:void 0,"--badge-color":o||i?c.color:void 0,"--badge-bd":o||i?c.border:void 0,"--badge-dot-color":"dot"===i?(0,a.p)(o,e):void 0}}}),p=(0,s.b)((e,r)=>{let o=(0,l.w)("Badge",g,e),{classNames:n,className:i,style:a,styles:s,unstyled:p,vars:h,radius:f,color:v,gradient:x,leftSection:b,rightSection:j,children:B,variant:C,fullWidth:y,autoContrast:_,circle:z,mod:w,...k}=o,V=(0,d.y)({name:"Badge",props:o,classes:u,className:i,style:a,classNames:n,styles:s,unstyled:p,vars:h,varsResolver:m});return(0,t.jsxs)(c.x,{variant:C,mod:[{block:y,circle:z},w],...V("root",{variant:C}),ref:r,...k,children:[b&&(0,t.jsx)("span",{...V("section"),"data-position":"left",children:b}),(0,t.jsx)("span",{...V("label"),children:B}),j&&(0,t.jsx)("span",{...V("section"),"data-position":"right",children:j})]})});p.classes=u,p.displayName="@mantine/core/Badge"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=65879)}),_N_E=e.O()}]);
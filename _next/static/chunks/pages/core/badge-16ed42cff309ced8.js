(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25110],{93693:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},18576:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return t(37830)}])},37830:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var o=t(24246),n=t(71670),a=t(27378),i=t(73988);let l=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,d={type:"configurator",component:function(e){return a.createElement(i.C,{...e},"Badge")},code:l,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var c=t(99989);let s={type:"configurator",component:function(e){return a.createElement(i.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:e=>`
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
`,centered:!0,controls:c.P};var u=t(22971);let m=`
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
`,g={type:"code",component:function(){return a.createElement(u.Z,null,a.createElement(i.C,{size:"xs",circle:!0},"1"),a.createElement(i.C,{size:"sm",circle:!0},"7"),a.createElement(i.C,{size:"md",circle:!0},"9"),a.createElement(i.C,{size:"lg",circle:!0},"3"),a.createElement(i.C,{size:"xl",circle:!0},"8"))},code:m,centered:!0};var p=t(93693),h=t(71078);let f=`
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
`,v={type:"code",component:function(){let e=a.createElement(p.Z,{style:{width:(0,h.h)(12),height:(0,h.h)(12)}});return a.createElement(u.Z,null,a.createElement(i.C,{leftSection:e},"With left section"),a.createElement(i.C,{rightSection:e},"With right section"))},centered:!0,code:f},b=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,B={type:"code",component:function(){return a.createElement(i.C,{fullWidth:!0},"Full width badge")},code:b};var C=t(61658),x=t(88193),y=t(91948),E=t(97717),j=t(2256);let z=`
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
`,_=e=>{let r=(0,C.B)(e),t=(0,x.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return t.isThemeColor&&"lime"===t.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,y.m)(t.value,.1),hover:(0,y.m)(t.value,.15),border:`${(0,h.h)(1)} solid ${t.value}`,color:(0,E._)(t.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},w={type:"code",component:function(){return a.createElement(j.M2,{theme:{variantColorResolver:_}},a.createElement(u.Z,null,a.createElement(i.C,{color:"lime.4",variant:"filled",size:"lg"},"Lime filled"),a.createElement(i.C,{color:"orange",variant:"light",size:"lg"},"Orange light"),a.createElement(i.C,{variant:"danger",size:"lg"},"Danger")))},centered:!0,defaultExpanded:!1,code:z},k=`
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
`,V={type:"code",component:function(){return a.createElement(u.Z,null,a.createElement(i.C,{size:"lg",color:"lime.4"},"Default"),a.createElement(i.C,{autoContrast:!0,size:"lg",color:"lime.4"},"Auto contrast"))},code:k,centered:!0};var D=t(68738);let G=`
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
`,R={type:"styles-api",data:D.o,component:function(e){let r=a.createElement(p.Z,{style:{width:(0,h.h)(12),height:(0,h.h)(12)}});return a.createElement(i.C,{leftSection:r,rightSection:r,...e},"Badge component")},centered:!0,code:G};var S=t(3916),A=t(54568);let T=(0,S.A)(A.us.Badge);function P(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components},{AutoContrast:t,Demo:a,Gradient:i,Polymorphic:l,StylesApiSelectors:c}=r;return t||F("AutoContrast",!0),a||F("Demo",!0),i||F("Gradient",!0),l||F("Polymorphic",!0),c||F("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(i,{component:"Badge"}),"\n",(0,o.jsx)(a,{data:s}),"\n",(0,o.jsx)(r.h2,{id:"rounded",children:"Rounded"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"circle"})," prop, to reduce horizontal padding and make badge width equal to its height:"]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsx)(r.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(r.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,o.jsx)(a,{data:B}),"\n",(0,o.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(r.p,{children:["You can customize colors for ",(0,o.jsx)(r.code,{children:"Badge"})," and other components variants by adding\n",(0,o.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(a,{data:w}),"\n",(0,o.jsx)(t,{component:"Badge"}),"\n",(0,o.jsx)(a,{data:V}),"\n",(0,o.jsx)(c,{component:"Badge"}),"\n",(0,o.jsx)(a,{data:R}),"\n",(0,o.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}function Z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(T,{...e,children:(0,o.jsx)(P,{...e})})}function F(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99989:function(e,r,t){"use strict";t.d(r,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},73988:function(e,r,t){"use strict";t.d(r,{C:function(){return p}});var o=t(27378),n=t(92082),a=t(83453),i=t(89738),l=t(96739),d=t(6231),c=t(56589),s=t(50332),u={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let m={},g=(0,a.Z)((e,{radius:r,color:t,gradient:o,variant:a,size:l,autoContrast:d})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:d});return{root:{"--badge-height":(0,n.ap)(l,"badge-height"),"--badge-padding-x":(0,n.ap)(l,"badge-padding-x"),"--badge-fz":(0,n.ap)(l,"badge-fz"),"--badge-radius":void 0===r?void 0:(0,n.H5)(r),"--badge-bg":t||a?c.background:void 0,"--badge-color":t||a?c.color:void 0,"--badge-bd":t||a?c.border:void 0,"--badge-dot-color":"dot"===a?(0,i.p)(t,e):void 0}}}),p=(0,s.b)((e,r)=>{let t=(0,l.w)("Badge",m,e),{classNames:n,className:a,style:i,styles:s,unstyled:p,vars:h,radius:f,color:v,gradient:b,leftSection:B,rightSection:C,children:x,variant:y,fullWidth:E,autoContrast:j,circle:z,mod:_,...w}=t,k=(0,d.y)({name:"Badge",props:t,classes:u,className:a,style:i,classNames:n,styles:s,unstyled:p,vars:h,varsResolver:g});return o.createElement(c.x,{variant:y,mod:[{block:E,circle:z},_],...k("root",{variant:y}),ref:r,...w},B&&o.createElement("span",{...k("section"),"data-position":"left"},B),o.createElement("span",{...k("label")},x),C&&o.createElement("span",{...k("section"),"data-position":"right"},C))});p.classes=u,p.displayName="@mantine/core/Badge"}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=18576)}),_N_E=e.O()}]);
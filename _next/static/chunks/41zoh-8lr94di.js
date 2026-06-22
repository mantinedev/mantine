(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var r=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let t={};for(var a in e)r(t,a,{get:e[a],enumerable:!0});return o||r(t,Symbol.toStringTag,{value:"Module"}),t}])},257177,e=>{"use strict";var r=e.i(433512),o=e.i(481178),t=e.i(317477),a=e.i(44091),n=e.i(391466),i=e.i(956449),l=e.i(232471),d={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let s=(0,o.createVarsResolver)((e,{radius:o,color:a,gradient:n,variant:i,size:l,autoContrast:d,circle:c})=>{let s=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:n,variant:i||"filled",autoContrast:d});return{root:{"--badge-height":(0,r.getSize)(l,"badge-height"),"--badge-padding-x":(0,r.getSize)(l,"badge-padding-x"),"--badge-fz":(0,r.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===o?void 0:(0,r.getRadius)(o),"--badge-bg":a||i?s.background:void 0,"--badge-color":a||i?s.color:void 0,"--badge-bd":a||i?s.border:void 0,"--badge-dot-color":"dot"===i?(0,t.getThemeColor)(a,e):void 0}}}),g=(0,i.polymorphicFactory)(e=>{let r=(0,a.useProps)("Badge",null,e),{classNames:o,className:t,style:i,styles:g,unstyled:u,vars:m,radius:p,color:h,gradient:v,leftSection:f,rightSection:B,children:x,variant:b,fullWidth:j,autoContrast:C,circle:y,mod:A,attributes:z,..._}=r,V=(0,n.useStyles)({name:"Badge",props:r,classes:d,className:t,style:i,classNames:o,styles:g,unstyled:u,attributes:z,vars:m,varsResolver:s});return(0,c.jsxs)(l.Box,{variant:b,mod:[{block:j,circle:y,"with-right-section":!!B,"with-left-section":!!f},A],...V("root",{variant:b}),..._,children:[f&&(0,c.jsx)("span",{...V("section"),"data-position":"left",children:f}),(0,c.jsx)("span",{...V("label"),children:x}),B&&(0,c.jsx)("span",{...V("section"),"data-position":"right",children:B})]})});g.classes=d,g.varsResolver=s,g.displayName="@mantine/core/Badge",e.s(["Badge",0,g],257177)},123895,e=>{"use strict";var r=e.i(191788),o=e.i(171481);let t=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),r.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),a=r.forwardRef((e,a)=>r.createElement(o.default,{ref:a,...e,weights:t}));a.displayName="AtIcon",e.s(["AtIcon",0,a],123895)},577830,e=>{"use strict";e.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},758060,e=>{"use strict";var r=e.i(391398),o=e.i(38856),t=e.i(648863),a=e.i(257177);let n={type:"configurator",component:function(e){return(0,r.jsx)(a.Badge,{...e,children:"Badge"})},code:`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]},i={type:"code",component:function(){return(0,r.jsx)(a.Badge,{fullWidth:!0,children:"Full width badge"})},code:`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`};var l=e.i(123895),d=e.i(725695);let c={type:"code",component:function(){let e=(0,r.jsx)(l.AtIcon,{size:12});return(0,r.jsxs)(d.Group,{children:[(0,r.jsx)(a.Badge,{leftSection:e,children:"With left section"}),(0,r.jsx)(a.Badge,{rightSection:e,children:"With right section"})]})},centered:!0,code:`
import { Badge, Group } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <AtIcon size={12} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`},s={type:"configurator",component:function(e){return(0,r.jsx)(a.Badge,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient badge"})},code:e=>`
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
`,centered:!0,controls:e.i(577830).gradientControls};var g=e.i(730637);let u=`
import { Badge } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <AtIcon size={12} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`,m={type:"styles-api",data:g.BadgeStylesApi,component:function(e){let o=(0,r.jsx)(l.AtIcon,{size:12});return(0,r.jsx)(a.Badge,{leftSection:o,rightSection:o,...e,children:"Badge component"})},centered:!0,code:u},p={type:"code",component:function(){return(0,r.jsxs)(d.Group,{children:[(0,r.jsx)(a.Badge,{size:"xs",circle:!0,children:"1"}),(0,r.jsx)(a.Badge,{size:"sm",circle:!0,children:"7"}),(0,r.jsx)(a.Badge,{size:"md",circle:!0,children:"9"}),(0,r.jsx)(a.Badge,{size:"lg",circle:!0,children:"3"}),(0,r.jsx)(a.Badge,{size:"xl",circle:!0,children:"8"})]})},code:`
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
`,centered:!0};var h=e.i(951254),v=e.i(4518),f=e.i(649069),B=e.i(670989),x=e.i(744335);let b=e=>{let r=(0,f.defaultVariantColorsResolver)(e),o=(0,B.parseThemeColor)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,x.rgba)(o.value,.1),hover:(0,x.rgba)(o.value,.15),border:`1px solid ${o.value}`,color:(0,v.darken)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},j={type:"code",component:function(){return(0,r.jsx)(h.MantineThemeProvider,{theme:{variantColorResolver:b},children:(0,r.jsxs)(d.Group,{children:[(0,r.jsx)(a.Badge,{color:"lime.4",variant:"filled",size:"lg",children:"Lime filled"}),(0,r.jsx)(a.Badge,{color:"orange",variant:"light",size:"lg",children:"Orange light"}),(0,r.jsx)(a.Badge,{variant:"danger",size:"lg",children:"Danger"})]})})},centered:!0,defaultExpanded:!1,code:`
import { ImageIcon, FingerprintIcon, WarningIcon } from '@phosphor-icons/react';
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
`},C={type:"code",component:function(){return(0,r.jsxs)(d.Group,{children:[(0,r.jsx)(a.Badge,{size:"lg",color:"lime.4",children:"Default"}),(0,r.jsx)(a.Badge,{autoContrast:!0,size:"lg",color:"lime.4",children:"Auto contrast"})]})},code:`
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
`,centered:!0};var y=(0,t.__exportAll)({autoContrast:()=>C,fullWidth:()=>i,gradient:()=>s,rounded:()=>p,sections:()=>c,stylesApi:()=>m,usage:()=>n,variantColorsResolver:()=>j});e.i(603441);var A=e.i(62558);e.i(457450);var z=e.i(418026);let _=(0,A.Layout)(z.MDX_DATA.Badge);function V(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.useMDXComponents)(),...e.components},{AutoContrast:a,Demo:n,Gradient:i,Polymorphic:l,StylesApiSelectors:d}=t;return a||w("AutoContrast",!0),n||w("Demo",!0),i||w("Gradient",!0),l||w("Polymorphic",!0),d||w("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:y.usage}),"\n",(0,r.jsx)(i,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:y.gradient}),"\n",(0,r.jsx)(t.h2,{id:"rounded",children:"Rounded"}),"\n",(0,r.jsxs)(t.p,{children:["Set the ",(0,r.jsx)(t.code,{children:"circle"})," prop to reduce horizontal padding and make the badge width equal to its height:"]}),"\n",(0,r.jsx)(n,{data:y.rounded}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsx)(n,{data:y.sections}),"\n",(0,r.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fullWidth"})," to make the badge span the full width of its parent element:"]}),"\n",(0,r.jsx)(n,{data:y.fullWidth}),"\n",(0,r.jsx)(t.h2,{id:"customize-variant-colors",children:"Customize variant colors"}),"\n",(0,r.jsxs)(t.p,{children:["You can customize colors for ",(0,r.jsx)(t.code,{children:"Badge"})," and other component variants by adding\n",(0,r.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,r.jsx)(n,{data:y.variantColorsResolver}),"\n",(0,r.jsx)(a,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:y.autoContrast}),"\n",(0,r.jsx)(d,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:y.stylesApi}),"\n",(0,r.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}function w(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,r.jsx)(_,{...e,children:(0,r.jsx)(V,{...e})})}],758060)},267349,(e,r,o)=>{let t="/core/badge";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(758060)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(r=>Promise.all(["static/chunks/22379_btw709h.js"].map(r=>e.l(r))).then(()=>r(493594)))},828805,e=>{e.v(r=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(r=>e.l(r))).then(()=>r(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34272],{11541:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/action-icon",function(){return o(57019)}])},57019:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>X});var t=o(31085),i=o(71184),r=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]]),a=o(22962);let c={type:"configurator",component:function(e){return(0,t.jsx)(a.M,{...e,"aria-label":"Settings",children:(0,t.jsx)(r,{style:{width:"70%",height:"70%"},stroke:1.5})})},code:`
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
`,centered:!0,controls:[o(78362).ip,{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"}]};var s=o(45854);let l={type:"configurator",component:function(e){return(0,t.jsx)(a.M,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,t.jsx)(s.A,{})})},code:e=>`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
`,centered:!0,controls:o(61866).n},d={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.M,{size:42,variant:"default","aria-label":"ActionIcon with size as a number",children:(0,t.jsx)(s.A,{size:24})})},code:`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart size={24} />
    </ActionIcon>
  );
}
`};var u=o(56051),h=o(90275);let p={type:"code",component:function(){return(0,t.jsxs)(u.Y,{children:[(0,t.jsx)(h.k,{placeholder:"sm size input",size:"sm"}),(0,t.jsx)(a.M,{size:"input-sm",variant:"default","aria-label":"ActionIcon the same size as inputs",children:"SM"})]})},code:`
import { ActionIcon, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
`,centered:!0},m={type:"code",component:function(){return(0,t.jsxs)(u.Y,{justify:"center",children:[(0,t.jsx)(a.M,{size:"xl",disabled:!0,"aria-label":"Disabled and not interactive",children:(0,t.jsx)(s.A,{})}),(0,t.jsx)(a.M,{size:"xl","data-disabled":!0,"aria-label":"Has disabled styles but still interactive",children:(0,t.jsx)(s.A,{})})]})},code:`
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
`};var x=o(81723);let v={type:"code",component:function(){return(0,t.jsx)(a.M,{component:"a",href:"https://mantine.dev","data-disabled":!0,size:"xl","aria-label":"Open in a new tab",onClick:e=>e.preventDefault(),children:(0,t.jsx)(x.A,{})})},centered:!0,code:`
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`};var j={button:"m_892ca4f5"};let b={type:"code",component:function(){return(0,t.jsx)(a.M,{size:"xl",className:j.button,disabled:!0,"aria-label":"Disabled with styles",children:(0,t.jsx)(s.A,{})})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
`,language:"tsx"}]};var I=o(2912);let f={type:"code",component:function(){return(0,t.jsx)(I.m,{label:"Tooltip for disabled button",children:(0,t.jsx)(a.M,{size:"xl","data-disabled":!0,onClick:e=>e.preventDefault(),children:(0,t.jsx)(s.A,{})})})},centered:!0,code:`
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`};var g=o(26975),A=o(92051);let y={type:"code",component:function(){let[e,{toggle:n}]=(0,A.j)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Y,{children:[(0,t.jsx)(a.M,{loading:e,children:(0,t.jsx)(s.A,{size:18,stroke:1.5})}),(0,t.jsx)(a.M,{variant:"light",loading:e,children:(0,t.jsx)(s.A,{size:18,stroke:1.5})}),(0,t.jsx)(a.M,{variant:"outline",loading:e,children:(0,t.jsx)(s.A,{size:18,stroke:1.5})})]}),(0,t.jsx)(g.d,{checked:e,onChange:n,label:"Loading state",mt:"md"})]})},centered:!0,code:`
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`},z={type:"code",component:function(){return(0,t.jsx)(a.M,{size:"xl",loading:!0,loaderProps:{type:"dots"}})},centered:!0,code:`
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`};var k=o(12616),M=o(92408);let w=`
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`,C=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,D=(0,k.a)({components:{ActionIcon:a.M.extend({classNames:{root:"m_6f3d7427"}})}}),G={type:"code",component:function(){return(0,t.jsx)(M.nW,{theme:D,children:(0,t.jsxs)(u.Y,{justify:"center",children:[(0,t.jsx)(a.M,{size:"xl",variant:"danger","aria-label":"Danger variant",children:(0,t.jsx)(s.A,{})}),(0,t.jsx)(a.M,{size:"xl",variant:"primary","aria-label":"Primary variant",children:(0,t.jsx)(s.A,{})})]})})},centered:!0,code:[{fileName:"Demo.tsx",code:w,language:"tsx"},{fileName:"Demo.module.css",code:C,language:"scss"}]};var T=o(33102),_=o(92854),H=o(20132),V=o(26762),N=o(81754),P=o(16560),S=o(69842);let E=e=>{let n=(0,V.v)(e),o=(0,N.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...n,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,P.B)(o.value,.1),hover:(0,P.B)(o.value,.15),border:`1px solid ${o.value}`,color:(0,S.e)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},L={type:"code",component:function(){return(0,t.jsx)(M.nW,{theme:{variantColorResolver:E},children:(0,t.jsxs)(u.Y,{children:[(0,t.jsx)(a.M,{color:"lime.4",variant:"filled",size:"lg",children:(0,t.jsx)(T.A,{size:20,stroke:1.5})}),(0,t.jsx)(a.M,{color:"orange",variant:"light",size:"lg",children:(0,t.jsx)(_.A,{size:20,stroke:1.5})}),(0,t.jsx)(a.M,{variant:"danger",size:"lg",children:(0,t.jsx)(H.A,{size:20,stroke:1.5})})]})})},centered:!0,defaultExpanded:!1,code:`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ActionIcon,
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
        <ActionIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ActionIcon>

        <ActionIcon variant="danger">
          <IconError404 size={20} />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`},R={type:"code",component:function(){return(0,t.jsxs)(u.Y,{children:[(0,t.jsx)(a.M,{"aria-label":"default action icon",size:"lg",color:"lime.4",children:(0,t.jsx)(_.A,{size:20})}),(0,t.jsx)(a.M,{autoContrast:!0,"aria-label":"autoContrast action icon",size:"lg",color:"lime.4",children:(0,t.jsx)(_.A,{size:20})})]})},code:`
import { IconFingerprint } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ActionIcon aria-label="default action icon" size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ActionIcon>
      <ActionIcon autoContrast aria-label="autoContrast action icon" size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ActionIcon>
    </Group>
  );
}
`,centered:!0};var F=o(37438),Y=o(31045);let q={type:"configurator",component:function(e){return(0,t.jsxs)(a.M.Group,{...e,children:[(0,t.jsx)(a.M,{variant:"default",size:"lg","aria-label":"Gallery",children:(0,t.jsx)(T.A,{size:20,stroke:1.5})}),(0,t.jsx)(a.M,{variant:"default",size:"lg","aria-label":"Settings",children:(0,t.jsx)(Y.A,{size:20,stroke:1.5})}),(0,t.jsx)(a.M,{variant:"default",size:"lg","aria-label":"Likes",children:(0,t.jsx)(s.A,{size:20,stroke:1.5})})]})},code:`
import { ActionIcon } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart size={20} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]};var U=o(7640),W=o(85954),O=o(38215);let $=(0,W.P)(O.XZ.ActionIcon);function B(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{AutoContrast:o,Demo:r,GetElementRef:a,Gradient:s,Polymorphic:u}=n;return o||Z("AutoContrast",!0),r||Z("Demo",!0),a||Z("GetElementRef",!0),s||Z("Gradient",!0),u||Z("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(s,{component:"ActionIcon"}),"\n",(0,t.jsx)(r,{data:l}),"\n",(0,t.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,t.jsxs)(n.p,{children:["You can use any valid CSS value in ",(0,t.jsx)(n.code,{children:"size"})," prop, it is used to set ",(0,t.jsx)(n.code,{children:"width"}),", ",(0,t.jsx)(n.code,{children:"min-width"}),", ",(0,t.jsx)(n.code,{children:"min-height"})," and ",(0,t.jsx)(n.code,{children:"height"}),"\nproperties. Note that ",(0,t.jsx)(n.code,{children:"size"})," prop does not control child ",(0,t.jsx)(n.a,{href:"/guides/icons",children:"icon"})," size, you need to\nset it manually on icon component. When ",(0,t.jsx)(n.code,{children:"size"})," is a number, the value is treated as ",(0,t.jsx)(n.code,{children:"px"})," units and\nconverted to ",(0,t.jsx)(n.a,{href:"/styles/rem",children:"rem"})," units."]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsxs)(n.p,{children:["If you want ",(0,t.jsx)(n.code,{children:"ActionIcon"})," to have the same size as Mantine inputs, use ",(0,t.jsx)(n.code,{children:'size="input-sm"'})," prop:"]}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsxs)(n.p,{children:["To make ",(0,t.jsx)(n.code,{children:"ActionIcon"})," disabled set ",(0,t.jsx)(n.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,t.jsx)(n.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,t.jsx)(r,{data:m}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state-when-actionicon-is-link",children:"Disabled state when ActionIcon is link"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<a />"})," element does not support ",(0,t.jsx)(n.code,{children:"disabled"})," attribute. To make ",(0,t.jsx)(n.code,{children:"ActionIcon"})," disabled when it is\nrendered as a link, set ",(0,t.jsx)(n.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,t.jsx)(n.code,{children:"onClick"})," event handler."]}),"\n",(0,t.jsx)(r,{data:v}),"\n",(0,t.jsx)(n.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,t.jsxs)(n.p,{children:["To customize disabled styles, it is recommended to use both ",(0,t.jsx)(n.code,{children:"&:disabled"})," and ",(0,t.jsx)(n.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"&:disabled"})," is used to style the button when ",(0,t.jsx)(n.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,t.jsx)(n.code,{children:"disabled"})," prop is set on a\n",(0,t.jsx)(n.code,{children:"<fieldset />"})," element which contains ",(0,t.jsx)(n.code,{children:"ActionIcon"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,t.jsx)(n.code,{children:"data-disabled"})," should be used if you need to use ",(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,t.jsx)(n.code,{children:"ActionIcon"}),"\nor when ",(0,t.jsx)(n.code,{children:"ActionIcon"})," is used as a link)"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onMouseLeave"})," event ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,t.jsx)(n.code,{children:"ActionIcon"})," is disabled, so if you need to use\n",(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,t.jsx)(n.code,{children:"ActionIcon"})," you need to set ",(0,t.jsx)(n.code,{children:"data-disabled"})," prop on ",(0,t.jsx)(n.code,{children:"ActionIcon"}),"\ninstead of ",(0,t.jsx)(n.code,{children:"disabled"}),". Note that it is also required to change ",(0,t.jsx)(n.code,{children:"onClick"})," event handler to\n",(0,t.jsx)(n.code,{children:"(event) => event.preventDefault()"})," as ",(0,t.jsx)(n.code,{children:"ActionIcon"})," is not actually disabled and will still trigger\n",(0,t.jsx)(n.code,{children:"onClick"})," event."]}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"loading"})," prop is set, ",(0,t.jsx)(n.code,{children:"ActionIcon"})," will be disabled and ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,t.jsx)(n.code,{children:"ActionIcon"})," variant."]}),"\n",(0,t.jsx)(r,{data:y}),"\n",(0,t.jsx)(n.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with ",(0,t.jsx)(n.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,t.jsx)(r,{data:z}),"\n",(0,t.jsx)(n.h2,{id:"add-custom-variants",children:"Add custom variants"}),"\n",(0,t.jsxs)(n.p,{children:["To add new ",(0,t.jsx)(n.code,{children:"ActionIcon"})," variants, use ",(0,t.jsx)(n.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,t.jsx)(n.code,{children:"ActionIcon"})," components in your application."]}),"\n",(0,t.jsx)(r,{data:G}),"\n",(0,t.jsx)(n.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize colors for ",(0,t.jsx)(n.code,{children:"ActionIcon"})," and other components variants by adding\n",(0,t.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,t.jsx)(r,{data:L}),"\n",(0,t.jsx)(o,{component:"ActionIcon"}),"\n",(0,t.jsx)(r,{data:R}),"\n",(0,t.jsx)(n.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ActionIcon"})," sizes are defined by ",(0,t.jsx)(n.code,{children:"--ai-size-{x}"})," CSS variables. The easiest way to add new sizes is to\ndefine additional ",(0,t.jsx)(n.code,{children:"--ai-size-{x}"})," variables on the ",(0,t.jsx)(n.code,{children:"root"})," element:"]}),"\n",(0,t.jsx)(r,{data:F.B}),"\n",(0,t.jsx)(n.h2,{id:"actionicongroup",children:"ActionIcon.Group"}),"\n",(0,t.jsx)(r,{data:q}),"\n",(0,t.jsxs)(n.p,{children:["Note that you must not wrap child ",(0,t.jsx)(n.code,{children:"ActionIcon"})," components with any additional elements:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { ActionIcon } from '@mantine/core';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <ActionIcon.Group>\n      <div>\n        <ActionIcon>This will not work</ActionIcon>\n      </div>\n      <ActionIcon>ActionIcons will have incorrect borders</ActionIcon>\n    </ActionIcon.Group>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"actionicongroupsection",children:"ActionIcon.GroupSection"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"ActionIcon.GroupSection"})," component to render sections that are not ",(0,t.jsx)(n.code,{children:"ActionIcon"})," inside ",(0,t.jsx)(n.code,{children:"ActionIcon.Group"}),":"]}),"\n",(0,t.jsx)(r,{data:U.h}),"\n",(0,t.jsx)(u,{defaultElement:"button",changeToElement:"a",component:"ActionIcon",withNext:!0}),"\n",(0,t.jsx)(a,{component:"ActionIcon",refType:"button"}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["To make ",(0,t.jsx)(n.code,{children:"ActionIcon"})," accessible for screen readers, you need to either set ",(0,t.jsx)(n.code,{children:"aria-label"})," or\nuse ",(0,t.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { IconHeart } from '@tabler/icons-react';\nimport { ActionIcon, VisuallyHidden } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <ActionIcon aria-label=\"Like post\">\n        <IconHeart />\n      </ActionIcon>\n\n      <ActionIcon>\n        <VisuallyHidden>Like post</VisuallyHidden>\n        <IconHeart />\n      </ActionIcon>\n    </>\n  );\n}\n"})})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)($,{...e,children:(0,t.jsx)(B,{...e})})}function Z(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6800:(e,n,o)=>{"use strict";o.d(n,{A:()=>t});var t=(0,o(73366).A)("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},20132:(e,n,o)=>{"use strict";o.d(n,{A:()=>t});var t=(0,o(73366).A)("outline","error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},92854:(e,n,o)=>{"use strict";o.d(n,{A:()=>t});var t=(0,o(73366).A)("outline","fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},45854:(e,n,o)=>{"use strict";o.d(n,{A:()=>t});var t=(0,o(73366).A)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},33102:(e,n,o)=>{"use strict";o.d(n,{A:()=>t});var t=(0,o(73366).A)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},31045:(e,n,o)=>{"use strict";o.d(n,{A:()=>t});var t=(0,o(73366).A)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},37438:(e,n,o)=>{"use strict";o.d(n,{B:()=>h});var t=o(31085),i=o(45854),r=o(12616),a=o(22962),c=o(92408),s=o(56051);let l=`
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart size={10} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart size={32} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`,d=`
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
`,u=(0,r.a)({components:{ActionIcon:a.M.extend({classNames:{root:"m_2be4ed51"}})}}),h={type:"code",component:function(){return(0,t.jsx)(c.nW,{theme:u,children:(0,t.jsxs)(s.Y,{justify:"center",children:[(0,t.jsx)(a.M,{size:"xxs","aria-label":"Custom xxs size",children:(0,t.jsx)(i.A,{size:10})}),(0,t.jsx)(a.M,{size:"xxl","aria-label":"Custom xxl size",children:(0,t.jsx)(i.A,{size:32})})]})})},code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},7640:(e,n,o)=>{"use strict";o.d(n,{h:()=>s});var t=o(31085),i=o(24551),r=o(6800),a=o(22962),c=o(89939);let s={type:"code",component:function(){let[e,{increment:n,decrement:o}]=(0,c.I)(135,{min:0});return(0,t.jsxs)(a.M.Group,{children:[(0,t.jsx)(a.M,{variant:"default",size:"lg",radius:"md",onClick:o,children:(0,t.jsx)(i.A,{color:"var(--mantine-color-red-text)"})}),(0,t.jsx)(a.M.GroupSection,{variant:"default",size:"lg",bg:"var(--mantine-color-body)",miw:60,children:e}),(0,t.jsx)(a.M,{variant:"default",size:"lg",radius:"md",onClick:n,children:(0,t.jsx)(r.A,{color:"var(--mantine-color-teal-text)"})})]})},code:`
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,centered:!0}},61866:(e,n,o)=>{"use strict";o.d(n,{n:()=>t});let t=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},78362:(e,n,o)=>{"use strict";o.d(n,{eD:()=>i,ip:()=>t});let t={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},i={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},89939:(e,n,o)=>{"use strict";o.d(n,{I:()=>a});var t=o(14041),i=o(68193);let r={min:-1/0,max:1/0};function a(e=0,n){let{min:o,max:c}={...r,...n},[s,l]=(0,t.useState)((0,i.q)(e,o,c));return[s,{increment:()=>l(e=>(0,i.q)(e+1,o,c)),decrement:()=>l(e=>(0,i.q)(e-1,o,c)),set:e=>l((0,i.q)(e,o,c)),reset:()=>l((0,i.q)(e,o,c))}]}},92051:(e,n,o)=>{"use strict";o.d(n,{j:()=>i});var t=o(14041);function i(e=!1,n){let{onOpen:o,onClose:r}=n||{},[a,c]=(0,t.useState)(e),s=(0,t.useCallback)(()=>{c(e=>e||(o?.(),!0))},[o]),l=(0,t.useCallback)(()=>{c(e=>e?(r?.(),!1):e)},[r]),d=(0,t.useCallback)(()=>{a?l():s()},[l,s,a]);return[a,{open:s,close:l,toggle:d}]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(11541)),_N_E=e.O()}]);
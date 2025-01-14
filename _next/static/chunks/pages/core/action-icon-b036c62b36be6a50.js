(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90931],{55414:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/action-icon",function(){return o(20117)}])},20117:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return Y}});var t=o(52322),i=o(45392),r=(0,o(73681).Z)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]]),a=o(15981);let c={type:"configurator",component:function(e){return(0,t.jsx)(a.A,{...e,"aria-label":"Settings",children:(0,t.jsx)(r,{style:{width:"70%",height:"70%"},stroke:1.5})})},code:`
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
`,centered:!0,controls:[o(50327).cH,{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"}]};var s=o(35913);let l={type:"configurator",component:function(e){return(0,t.jsx)(a.A,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,t.jsx)(s.Z,{})})},code:e=>`
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
`,centered:!0,controls:o(63048).P},d={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.A,{size:42,variant:"default","aria-label":"ActionIcon with size as a number",children:(0,t.jsx)(s.Z,{size:24})})},code:`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart size={24} />
    </ActionIcon>
  );
}
`};var u=o(93010),h=o(74770);let m={type:"code",component:function(){return(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(h.o,{placeholder:"sm size input",size:"sm"}),(0,t.jsx)(a.A,{size:"input-sm",variant:"default","aria-label":"ActionIcon the same size as inputs",children:"SM"})]})},code:`
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
`,centered:!0},p={type:"code",component:function(){return(0,t.jsxs)(u.Z,{justify:"center",children:[(0,t.jsx)(a.A,{size:"xl",disabled:!0,"aria-label":"Disabled and not interactive",children:(0,t.jsx)(s.Z,{})}),(0,t.jsx)(a.A,{size:"xl","data-disabled":!0,"aria-label":"Has disabled styles but still interactive",children:(0,t.jsx)(s.Z,{})})]})},code:`
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
`};var x=o(79797);let v={type:"code",component:function(){return(0,t.jsx)(a.A,{component:"a",href:"https://mantine.dev","data-disabled":!0,size:"xl","aria-label":"Open in a new tab",onClick:e=>e.preventDefault(),children:(0,t.jsx)(x.Z,{})})},centered:!0,code:`
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
`},f={type:"code",component:function(){return(0,t.jsx)(a.A,{size:"xl",className:"m_892ca4f5",disabled:!0,"aria-label":"Disabled with styles",children:(0,t.jsx)(s.Z,{})})},centered:!0,code:[{fileName:"Demo.module.css",code:`
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
`,language:"tsx"}]};var j=o(893);let b={type:"code",component:function(){return(0,t.jsx)(j.u,{label:"Tooltip for disabled button",children:(0,t.jsx)(a.A,{size:"xl","data-disabled":!0,onClick:e=>e.preventDefault(),children:(0,t.jsx)(s.Z,{})})})},centered:!0,code:`
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
`};var I=o(950),g=o(3900);let A={type:"code",component:function(){let[e,{toggle:n}]=(0,g.q)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(a.A,{loading:e,children:(0,t.jsx)(s.Z,{size:18,stroke:1.5})}),(0,t.jsx)(a.A,{variant:"light",loading:e,children:(0,t.jsx)(s.Z,{size:18,stroke:1.5})}),(0,t.jsx)(a.A,{variant:"outline",loading:e,children:(0,t.jsx)(s.Z,{size:18,stroke:1.5})})]}),(0,t.jsx)(I.r,{checked:e,onChange:n,label:"Loading state",mt:"md"})]})},centered:!0,code:`
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
`},y={type:"code",component:function(){return(0,t.jsx)(a.A,{size:"xl",loading:!0,loaderProps:{type:"dots"}})},centered:!0,code:`
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`};var z=o(60231),k=o(68755);let C=`
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
`,w=`
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
`,D=(0,z.j)({components:{ActionIcon:a.A.extend({classNames:{root:"m_6f3d7427"}})}}),Z={type:"code",component:function(){return(0,t.jsx)(k.M2,{theme:D,children:(0,t.jsxs)(u.Z,{justify:"center",children:[(0,t.jsx)(a.A,{size:"xl",variant:"danger","aria-label":"Danger variant",children:(0,t.jsx)(s.Z,{})}),(0,t.jsx)(a.A,{size:"xl",variant:"primary","aria-label":"Primary variant",children:(0,t.jsx)(s.Z,{})})]})})},centered:!0,code:[{fileName:"Demo.tsx",code:C,language:"tsx"},{fileName:"Demo.module.css",code:w,language:"scss"}]};var M=o(40289),G=o(74315),_=o(34706),H=o(9197),T=o(46403),V=o(20754),S=o(8943);let N=e=>{let n=(0,H.B)(e),o=(0,T.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...n,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,V.m)(o.value,.1),hover:(0,V.m)(o.value,.15),border:`1px solid ${o.value}`,color:(0,S._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},P={type:"code",component:function(){return(0,t.jsx)(k.M2,{theme:{variantColorResolver:N},children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(a.A,{color:"lime.4",variant:"filled",size:"lg",children:(0,t.jsx)(M.Z,{size:20,stroke:1.5})}),(0,t.jsx)(a.A,{color:"orange",variant:"light",size:"lg",children:(0,t.jsx)(G.Z,{size:20,stroke:1.5})}),(0,t.jsx)(a.A,{variant:"danger",size:"lg",children:(0,t.jsx)(_.Z,{size:20,stroke:1.5})})]})})},centered:!0,defaultExpanded:!1,code:`
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
`},E={type:"code",component:function(){return(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(a.A,{"aria-label":"default action icon",size:"lg",color:"lime.4",children:(0,t.jsx)(G.Z,{size:20})}),(0,t.jsx)(a.A,{autoContrast:!0,"aria-label":"autoContrast action icon",size:"lg",color:"lime.4",children:(0,t.jsx)(G.Z,{size:20})})]})},code:`
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
`,centered:!0};var L=o(70224),F=o(13274);let R={type:"configurator",component:function(e){return(0,t.jsxs)(a.A.Group,{...e,children:[(0,t.jsx)(a.A,{variant:"default",size:"lg","aria-label":"Gallery",children:(0,t.jsx)(M.Z,{size:20,stroke:1.5})}),(0,t.jsx)(a.A,{variant:"default",size:"lg","aria-label":"Settings",children:(0,t.jsx)(F.Z,{size:20,stroke:1.5})}),(0,t.jsx)(a.A,{variant:"default",size:"lg","aria-label":"Likes",children:(0,t.jsx)(s.Z,{size:20,stroke:1.5})})]})},code:`
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
`,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]};var U=o(85749),O=o(54078),$=o(15019);let q=(0,O.A)($.us.ActionIcon);function W(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{AutoContrast:o,Demo:r,GetElementRef:a,Gradient:s,Polymorphic:u}=n;return o||X("AutoContrast",!0),r||X("Demo",!0),a||X("GetElementRef",!0),s||X("Gradient",!0),u||X("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(s,{component:"ActionIcon"}),"\n",(0,t.jsx)(r,{data:l}),"\n",(0,t.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,t.jsxs)(n.p,{children:["You can use any valid CSS value in ",(0,t.jsx)(n.code,{children:"size"})," prop, it is used to set ",(0,t.jsx)(n.code,{children:"width"}),", ",(0,t.jsx)(n.code,{children:"min-width"}),", ",(0,t.jsx)(n.code,{children:"min-height"})," and ",(0,t.jsx)(n.code,{children:"height"}),"\nproperties. Note that ",(0,t.jsx)(n.code,{children:"size"})," prop does not control child ",(0,t.jsx)(n.a,{href:"/guides/icons",children:"icon"})," size, you need to\nset it manually on icon component. When ",(0,t.jsx)(n.code,{children:"size"})," is a number, the value is treated as ",(0,t.jsx)(n.code,{children:"px"})," units and\nconverted to ",(0,t.jsx)(n.a,{href:"/styles/rem",children:"rem"})," units."]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsxs)(n.p,{children:["If you want ",(0,t.jsx)(n.code,{children:"ActionIcon"})," to have the same size as Mantine inputs, use ",(0,t.jsx)(n.code,{children:'size="input-sm"'})," prop:"]}),"\n",(0,t.jsx)(r,{data:m}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsxs)(n.p,{children:["To make ",(0,t.jsx)(n.code,{children:"ActionIcon"})," disabled set ",(0,t.jsx)(n.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,t.jsx)(n.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state-when-actionicon-is-link",children:"Disabled state when ActionIcon is link"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<a />"})," element does not support ",(0,t.jsx)(n.code,{children:"disabled"})," attribute. To make ",(0,t.jsx)(n.code,{children:"ActionIcon"})," disabled when it is\nrendered as a link, set ",(0,t.jsx)(n.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,t.jsx)(n.code,{children:"onClick"})," event handler."]}),"\n",(0,t.jsx)(r,{data:v}),"\n",(0,t.jsx)(n.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,t.jsxs)(n.p,{children:["To customize disabled styles, it is recommended to use both ",(0,t.jsx)(n.code,{children:"&:disabled"})," and ",(0,t.jsx)(n.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"&:disabled"})," is used to style the button when ",(0,t.jsx)(n.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,t.jsx)(n.code,{children:"disabled"})," prop is set on a\n",(0,t.jsx)(n.code,{children:"<fieldset />"})," element which contains ",(0,t.jsx)(n.code,{children:"ActionIcon"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,t.jsx)(n.code,{children:"data-disabled"})," should be used if you need to use ",(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,t.jsx)(n.code,{children:"ActionIcon"}),"\nor when ",(0,t.jsx)(n.code,{children:"ActionIcon"})," is used as a link)"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onMouseLeave"})," event ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,t.jsx)(n.code,{children:"ActionIcon"})," is disabled, so if you need to use\n",(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,t.jsx)(n.code,{children:"ActionIcon"})," you need to set ",(0,t.jsx)(n.code,{children:"data-disabled"})," prop on ",(0,t.jsx)(n.code,{children:"ActionIcon"}),"\ninstead of ",(0,t.jsx)(n.code,{children:"disabled"}),". Note that it is also required to change ",(0,t.jsx)(n.code,{children:"onClick"})," event handler to\n",(0,t.jsx)(n.code,{children:"(event) => event.preventDefault()"})," as ",(0,t.jsx)(n.code,{children:"ActionIcon"})," is not actually disabled and will still trigger\n",(0,t.jsx)(n.code,{children:"onClick"})," event."]}),"\n",(0,t.jsx)(r,{data:b}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"loading"})," prop is set, ",(0,t.jsx)(n.code,{children:"ActionIcon"})," will be disabled and ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,t.jsx)(n.code,{children:"ActionIcon"})," variant."]}),"\n",(0,t.jsx)(r,{data:A}),"\n",(0,t.jsx)(n.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with ",(0,t.jsx)(n.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,t.jsx)(r,{data:y}),"\n",(0,t.jsx)(n.h2,{id:"add-custom-variants",children:"Add custom variants"}),"\n",(0,t.jsxs)(n.p,{children:["To add new ",(0,t.jsx)(n.code,{children:"ActionIcon"})," variants, use ",(0,t.jsx)(n.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,t.jsx)(n.code,{children:"ActionIcon"})," components in your application."]}),"\n",(0,t.jsx)(r,{data:Z}),"\n",(0,t.jsx)(n.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize colors for ",(0,t.jsx)(n.code,{children:"ActionIcon"})," and other components variants by adding\n",(0,t.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,t.jsx)(r,{data:P}),"\n",(0,t.jsx)(o,{component:"ActionIcon"}),"\n",(0,t.jsx)(r,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ActionIcon"})," sizes are defined by ",(0,t.jsx)(n.code,{children:"--ai-size-{x}"})," CSS variables. The easiest way to add new sizes is to\ndefine additional ",(0,t.jsx)(n.code,{children:"--ai-size-{x}"})," variables on the ",(0,t.jsx)(n.code,{children:"root"})," element:"]}),"\n",(0,t.jsx)(r,{data:L.h}),"\n",(0,t.jsx)(n.h2,{id:"actionicongroup",children:"ActionIcon.Group"}),"\n",(0,t.jsx)(r,{data:R}),"\n",(0,t.jsxs)(n.p,{children:["Note that you must not wrap child ",(0,t.jsx)(n.code,{children:"ActionIcon"})," components with any additional elements:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { ActionIcon } from '@mantine/core';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <ActionIcon.Group>\n      <div>\n        <ActionIcon>This will not work</ActionIcon>\n      </div>\n      <ActionIcon>ActionIcons will have incorrect borders</ActionIcon>\n    </ActionIcon.Group>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"actionicongroupsection",children:"ActionIcon.GroupSection"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"ActionIcon.GroupSection"})," component to render sections that are not ",(0,t.jsx)(n.code,{children:"ActionIcon"})," inside ",(0,t.jsx)(n.code,{children:"ActionIcon.Group"}),":"]}),"\n",(0,t.jsx)(r,{data:U.S}),"\n",(0,t.jsx)(u,{defaultElement:"button",changeToElement:"a",component:"ActionIcon",withNext:!0}),"\n",(0,t.jsx)(a,{component:"ActionIcon",refType:"button"}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["To make ",(0,t.jsx)(n.code,{children:"ActionIcon"})," accessible for screen readers, you need to either set ",(0,t.jsx)(n.code,{children:"aria-label"})," or\nuse ",(0,t.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { IconHeart } from '@tabler/icons-react';\nimport { ActionIcon, VisuallyHidden } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <ActionIcon aria-label=\"Like post\">\n        <IconHeart />\n      </ActionIcon>\n\n      <ActionIcon>\n        <VisuallyHidden>Like post</VisuallyHidden>\n        <IconHeart />\n      </ActionIcon>\n    </>\n  );\n}\n"})})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(q,{...e,children:(0,t.jsx)(W,{...e})})}function X(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},60188:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},34706:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},74315:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},35913:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},40289:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},13274:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(73681).Z)("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},70224:function(e,n,o){"use strict";o.d(n,{h:function(){return h}});var t=o(52322),i=o(35913),r=o(60231),a=o(15981),c=o(68755),s=o(93010);let l=`
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
`,u=(0,r.j)({components:{ActionIcon:a.A.extend({classNames:{root:"m_2be4ed51"}})}}),h={type:"code",component:function(){return(0,t.jsx)(c.M2,{theme:u,children:(0,t.jsxs)(s.Z,{justify:"center",children:[(0,t.jsx)(a.A,{size:"xxs","aria-label":"Custom xxs size",children:(0,t.jsx)(i.Z,{size:10})}),(0,t.jsx)(a.A,{size:"xxl","aria-label":"Custom xxl size",children:(0,t.jsx)(i.Z,{size:32})})]})})},code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},85749:function(e,n,o){"use strict";o.d(n,{S:function(){return s}});var t=o(52322),i=o(92536),r=o(60188),a=o(15981),c=o(43647);let s={type:"code",component:function(){let[e,{increment:n,decrement:o}]=(0,c.C)(135,{min:0});return(0,t.jsxs)(a.A.Group,{children:[(0,t.jsx)(a.A,{variant:"default",size:"lg",radius:"md",onClick:o,children:(0,t.jsx)(i.Z,{color:"var(--mantine-color-red-text)"})}),(0,t.jsx)(a.A.GroupSection,{variant:"default",size:"lg",bg:"var(--mantine-color-body)",miw:60,children:e}),(0,t.jsx)(a.A,{variant:"default",size:"lg",radius:"md",onClick:n,children:(0,t.jsx)(r.Z,{color:"var(--mantine-color-teal-text)"})})]})},code:`
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
`,centered:!0}},63048:function(e,n,o){"use strict";o.d(n,{P:function(){return t}});let t=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},50327:function(e,n,o){"use strict";o.d(n,{cH:function(){return t},d_:function(){return i}});let t={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},i={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},43647:function(e,n,o){"use strict";o.d(n,{C:function(){return a}});var t=o(2784),i=o(82692);let r={min:-1/0,max:1/0};function a(e=0,n){let{min:o,max:a}={...r,...n},[c,s]=(0,t.useState)((0,i.u)(e,o,a));return[c,{increment:()=>s(e=>(0,i.u)(e+1,o,a)),decrement:()=>s(e=>(0,i.u)(e-1,o,a)),set:e=>s((0,i.u)(e,o,a)),reset:()=>s((0,i.u)(e,o,a))}]}},3900:function(e,n,o){"use strict";o.d(n,{q:function(){return i}});var t=o(2784);function i(e=!1,n){let{onOpen:o,onClose:i}=n||{},[r,a]=(0,t.useState)(e),c=(0,t.useCallback)(()=>{a(e=>e||(o?.(),!0))},[o]),s=(0,t.useCallback)(()=>{a(e=>e?(i?.(),!1):e)},[i]),l=(0,t.useCallback)(()=>{r?s():c()},[s,c,r]);return[r,{open:c,close:s,toggle:l}]}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=55414)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24686],{63861:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/variants-sizes",function(){return n(99395)}])},99395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var o=n(31085),r=n(71184),a=n(88506),i=n(40975),s=n(21934),l=n(21372),d=n(37438),c=n(18675),p=n(20017);let h=(0,c.P)(p.XZ.VariantsAndSizes);function u(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"variants-and-sizes",children:"Variants and sizes"}),"\n",(0,o.jsx)(t.h2,{id:"adding-custom-variants",children:"Adding custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["Most of Mantine components support ",(0,o.jsx)(t.code,{children:"variant"})," prop, it can be used in CSS variables resolver,\nand it is also exposed as ",(0,o.jsx)(t.code,{children:'data-variant="{value}"'})," attribute on the root element of the component.\nThe easiest way to add custom variants is to add styles that use ",(0,o.jsx)(t.code,{children:'[data-variant="{value}"]'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding a new variant to the ",(0,o.jsx)(t.a,{href:"/core/input",children:"Input"})," component:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"underline"})," variant styles are added"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"filled"})," variant is a default variant – you do not need to define any additional styles for it"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:a.d}),"\n",(0,o.jsxs)(t.p,{children:["Note that you can add custom variants to every Mantine component that supports ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"\neven if there are no variants defined on the library side."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Overriding existing variants styles"})}),"\n",(0,o.jsxs)(t.p,{children:["Apart from adding new variants, you can also override existing ones, for example, you can change the\n",(0,o.jsx)(t.code,{children:"filled"})," variant of the ",(0,o.jsx)(t.a,{href:"/core/input",children:"Input"})," component with ",(0,o.jsx)(t.code,{children:'.input[data-variant="filled"]'})," selector."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants-types",children:"Custom variants types"}),"\n",(0,o.jsxs)(t.p,{children:["You can define types for custom variants by creating ",(0,o.jsx)(t.code,{children:"mantine.d.ts"})," file\nin your project and extending ",(0,o.jsx)(t.code,{children:"{x}Props"})," interface with the new variant type."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding custom variant type to ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { ButtonVariant, MantineSize } from '@mantine/core';\n\ntype ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';\n\ndeclare module '@mantine/core' {\n  export interface ButtonProps {\n    variant?: ExtendedButtonVariant;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"variantcolorresolver",children:"variantColorResolver"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(t.a,{href:"/core/badge",children:"Badge"}),", ",(0,o.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," and other\ncomponents support custom variants with ",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors and adding new variants. Note that ",(0,o.jsx)(t.code,{children:"theme.variantColorResolver"})," is\nresponsible only for colors, if you need to change other properties, use ",(0,o.jsx)(t.code,{children:"data-variant"})," attribute."]}),"\n",(0,o.jsx)(n,{data:i._}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-components-css-variables",children:"Sizes with components CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["You can add custom sizes to any component that supports ",(0,o.jsx)(t.code,{children:"size"})," prop by providing a custom\nCSS variables resolver, usually it is done in ",(0,o.jsx)(t.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(n,{data:s.f}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-data-size-attribute",children:"Sizes with data-size attribute"}),"\n",(0,o.jsxs)(t.p,{children:["Every component that supports ",(0,o.jsx)(t.code,{children:"size"})," prop exposes it as ",(0,o.jsx)(t.code,{children:'data-size="{value}"'})," attribute on the root element.\nYou can use it to add custom sizes:"]}),"\n",(0,o.jsx)(n,{data:l.Q}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-static-css-variables",children:"Sizes with static CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["Mantine components sizes are defined with CSS variables (usually on root element), for example,\n",(0,o.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," component has the following CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".root {\n  --ai-size-xs: 18px;\n  --ai-size-sm: 22px;\n  --ai-size-md: 28px;\n  --ai-size-lg: 34px;\n  --ai-size-xl: 44px;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can override these values with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," or add new sizes values:"]}),"\n",(0,o.jsx)(n,{data:d.B}),"\n",(0,o.jsxs)(t.p,{children:["Note that some components have more than one CSS variable for size, for example,\nthe ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component has the following CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".root {\n  --button-height-xs: 30px;\n  --button-height-sm: 36px;\n  --button-height-md: 42px;\n  --button-height-lg: 50px;\n  --button-height-xl: 60px;\n\n  --button-height-compact-xs: 22px;\n  --button-height-compact-sm: 26px;\n  --button-height-compact-md: 30px;\n  --button-height-compact-lg: 34px;\n  --button-height-compact-xl: 40px;\n\n  --button-padding-x-xs: 14px;\n  --button-padding-x-sm: 18px;\n  --button-padding-x-md: 22px;\n  --button-padding-x-lg: 26px;\n  --button-padding-x-xl: 32px;\n\n  --button-padding-x-compact-xs: 7px;\n  --button-padding-x-compact-sm: 8px;\n  --button-padding-x-compact-md: 10px;\n  --button-padding-x-compact-lg: 12px;\n  --button-padding-x-compact-xl: 14px;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Usually, it is more convenient to use ",(0,o.jsx)(t.code,{children:"data-size"})," attribute or ",(0,o.jsx)(t.code,{children:"vars"})," on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),"\nto customize sizes in this case."]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(u,{...e})})}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},45854:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},37438:(e,t,n)=>{"use strict";n.d(t,{B:()=>h});var o=n(31085),r=n(45854),a=n(12616),i=n(22962),s=n(92408),l=n(56051);let d=`
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
`,c=`
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
`,p=(0,a.a)({components:{ActionIcon:i.M.extend({classNames:{root:"m_2be4ed51"}})}}),h={type:"code",component:function(){return(0,o.jsx)(s.nW,{theme:p,children:(0,o.jsxs)(l.Y,{justify:"center",children:[(0,o.jsx)(i.M,{size:"xxs","aria-label":"Custom xxs size",children:(0,o.jsx)(r.A,{size:10})}),(0,o.jsx)(i.M,{size:"xxl","aria-label":"Custom xxl size",children:(0,o.jsx)(r.A,{size:32})})]})})},code:[{fileName:"Demo.tsx",code:d,language:"tsx"},{fileName:"Demo.module.css",code:c,language:"scss"}]}},88506:(e,t,n)=>{"use strict";n.d(t,{d:()=>i});var o=n(31085),r=n(34452),a={input:"m_93131372"};let i={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{classNames:a,variant:"underline",placeholder:"Underline input"}),(0,o.jsx)(r.p,{classNames:a,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,language:"scss"}]}},21372:(e,t,n)=>{"use strict";n.d(t,{Q:()=>c});var o=n(31085),r=n(12616),a=n(34452),i=n(92408);let s=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,l=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`,d=(0,r.a)({components:{Input:a.p.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),c={type:"code",component:function(){return(0,o.jsxs)(i.nW,{theme:d,children:[(0,o.jsx)(a.p,{placeholder:"Size XXL",size:"xxl"}),(0,o.jsx)(a.p,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:s,fileName:"Demo.tsx"},{language:"scss",code:l,fileName:"Demo.module.css"}]}},21934:(e,t,n)=>{"use strict";n.d(t,{f:()=>d});var o=n(31085),r=n(52022),a=n(56051);let i=`
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,s=`
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,l=(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};r.$.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let d={type:"code",component:function(){return(0,o.jsxs)(a.Y,{children:[(0,o.jsx)(r.$,{vars:l,size:"xxl",children:"XXL Button"}),(0,o.jsx)(r.$,{vars:l,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:s,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}},40975:(e,t,n)=>{"use strict";n.d(t,{_:()=>h});var o=n(31085),r=n(26762),a=n(81754),i=n(16560),s=n(69842),l=n(92408),d=n(56051),c=n(52022);let p=e=>{let t=(0,r.v)(e),n=(0,a.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,i.B)(n.value,.1),hover:(0,i.B)(n.value,.15),border:`1px solid ${n.value}`,color:(0,s.e)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},h={type:"code",component:function(){return(0,o.jsx)(l.nW,{theme:{variantColorResolver:p},children:(0,o.jsxs)(d.Y,{children:[(0,o.jsx)(c.$,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,o.jsx)(c.$,{color:"orange",variant:"light",children:"Orange light button"}),(0,o.jsx)(c.$,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
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
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(63861)),_N_E=e.O()}]);
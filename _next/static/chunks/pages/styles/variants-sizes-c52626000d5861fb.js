(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56022],{1021:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/variants-sizes",function(){return n(79807)}])},79807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(52322),r=n(45392),i=n(87523),a=n(2498),s=n(23344),l=n(87119),c=n(70224),d=n(25071),u=n(15019);let h=(0,d.A)(u.us.VariantsAndSizes);function m(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"variants-and-sizes",children:"Variants and sizes"}),"\n",(0,o.jsx)(t.h2,{id:"adding-custom-variants",children:"Adding custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["Most of Mantine components support ",(0,o.jsx)(t.code,{children:"variant"})," prop, it can be used in CSS variables resolver,\nand it is also exposed as ",(0,o.jsx)(t.code,{children:'data-variant="{value}"'})," attribute on the root element of the component.\nThe easiest way to add custom variants is to add styles that use ",(0,o.jsx)(t.code,{children:'[data-variant="{value}"]'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding a new variant to the ",(0,o.jsx)(t.a,{href:"/core/input",children:"Input"})," component:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"underline"})," variant styles are added"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"filled"})," variant is a default variant – you do not need to define any additional styles for it"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:i.j}),"\n",(0,o.jsxs)(t.p,{children:["Note that you can add custom variants to every Mantine component that supports ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"\neven if there are no variants defined on the library side."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Overriding existing variants styles"})}),"\n",(0,o.jsxs)(t.p,{children:["Apart from adding new variants, you can also override existing ones, for example, you can change the\n",(0,o.jsx)(t.code,{children:"filled"})," variant of the ",(0,o.jsx)(t.a,{href:"/core/input",children:"Input"})," component with ",(0,o.jsx)(t.code,{children:'.input[data-variant="filled"]'})," selector."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants-types",children:"Custom variants types"}),"\n",(0,o.jsxs)(t.p,{children:["You can define types for custom variants by creating ",(0,o.jsx)(t.code,{children:"mantine.d.ts"})," file\nin your project and extending ",(0,o.jsx)(t.code,{children:"{x}Props"})," interface with the new variant type."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding custom variant type to ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { ButtonVariant, MantineSize } from '@mantine/core';\n\ntype ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';\n\ndeclare module '@mantine/core' {\n  export interface ButtonProps {\n    variant?: ExtendedButtonVariant;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"variantcolorresolver",children:"variantColorResolver"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(t.a,{href:"/core/badge",children:"Badge"}),", ",(0,o.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," and other\ncomponents support custom variants with ",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors and adding new variants. Note that ",(0,o.jsx)(t.code,{children:"theme.variantColorResolver"})," is\nresponsible only for colors, if you need to change other properties, use ",(0,o.jsx)(t.code,{children:"data-variant"})," attribute."]}),"\n",(0,o.jsx)(n,{data:a.D}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-components-css-variables",children:"Sizes with components CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["You can add custom sizes to any component that supports ",(0,o.jsx)(t.code,{children:"size"})," prop by providing a custom\nCSS variables resolver, usually it is done in ",(0,o.jsx)(t.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(n,{data:s.g}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-data-size-attribute",children:"Sizes with data-size attribute"}),"\n",(0,o.jsxs)(t.p,{children:["Every component that supports ",(0,o.jsx)(t.code,{children:"size"})," prop exposes it as ",(0,o.jsx)(t.code,{children:'data-size="{value}"'})," attribute on the root element.\nYou can use it to add custom sizes:"]}),"\n",(0,o.jsx)(n,{data:l.R}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-static-css-variables",children:"Sizes with static CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["Mantine components sizes are defined with CSS variables (usually on root element), for example,\n",(0,o.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," component has the following CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".root {\n  --ai-size-xs: rem(18px);\n  --ai-size-sm: rem(22px);\n  --ai-size-md: rem(28px);\n  --ai-size-lg: rem(34px);\n  --ai-size-xl: rem(44px);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can override these values with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," or add new sizes values:"]}),"\n",(0,o.jsx)(n,{data:c.h}),"\n",(0,o.jsxs)(t.p,{children:["Note that some components have more than one CSS variable for size, for example,\nthe ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component has the following CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".root {\n  --button-height-xs: rem(30px);\n  --button-height-sm: rem(36px);\n  --button-height-md: rem(42px);\n  --button-height-lg: rem(50px);\n  --button-height-xl: rem(60px);\n\n  --button-height-compact-xs: rem(22px);\n  --button-height-compact-sm: rem(26px);\n  --button-height-compact-md: rem(30px);\n  --button-height-compact-lg: rem(34px);\n  --button-height-compact-xl: rem(40px);\n\n  --button-padding-x-xs: rem(14px);\n  --button-padding-x-sm: rem(18px);\n  --button-padding-x-md: rem(22px);\n  --button-padding-x-lg: rem(26px);\n  --button-padding-x-xl: rem(32px);\n\n  --button-padding-x-compact-xs: rem(7px);\n  --button-padding-x-compact-sm: rem(8px);\n  --button-padding-x-compact-md: rem(10px);\n  --button-padding-x-compact-lg: rem(12px);\n  --button-padding-x-compact-xl: rem(14px);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Usually, it is more convenient to use ",(0,o.jsx)(t.code,{children:"data-size"})," attribute or ",(0,o.jsx)(t.code,{children:"vars"})," on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),"\nto customize sizes in this case."]})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(m,{...e})})}},35913:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(73681).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},70224:function(e,t,n){"use strict";n.d(t,{h:function(){return m}});var o=n(52322),r=n(35913),i=n(60231),a=n(15981),s=n(68755),l=n(93010),c=n(58898);let d=`
import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
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
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`,u=`
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
`,h=(0,i.j)({components:{ActionIcon:a.A.extend({classNames:{root:"m_2be4ed51"}})}}),m={type:"code",component:function(){return(0,o.jsx)(s.M2,{theme:h,children:(0,o.jsxs)(l.Z,{justify:"center",children:[(0,o.jsx)(a.A,{size:"xxs","aria-label":"Custom xxs size",children:(0,o.jsx)(r.Z,{style:{width:(0,c.h)(10),height:(0,c.h)(10)}})}),(0,o.jsx)(a.A,{size:"xxl","aria-label":"Custom xxl size",children:(0,o.jsx)(r.Z,{style:{width:(0,c.h)(32),height:(0,c.h)(32)}})})]})})},code:[{fileName:"Demo.module.css",code:u,language:"scss"},{fileName:"Demo.tsx",code:d,language:"tsx"}]}},87523:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});var o=n(52322),r=n(6941),i={input:"m_93131372"};let a={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.I,{classNames:i,variant:"underline",placeholder:"Underline input"}),(0,o.jsx)(r.I,{classNames:i,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]}},87119:function(e,t,n){"use strict";n.d(t,{R:function(){return d}});var o=n(52322),r=n(60231),i=n(6941),a=n(68755);let s=`
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
`,c=(0,r.j)({components:{Input:i.I.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),d={type:"code",component:function(){return(0,o.jsxs)(a.M2,{theme:c,children:[(0,o.jsx)(i.I,{placeholder:"Size XXL",size:"xxl"}),(0,o.jsx)(i.I,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:s,fileName:"Demo.tsx"},{language:"scss",code:l,fileName:"Demo.module.css"}]}},23344:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var o=n(52322),r=n(58898),i=n(39629),a=n(93010);let s=`
import { Button, rem, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': rem(60),
        '--button-padding-x': rem(30),
        '--button-fz': rem(24),
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': rem(24),
        '--button-padding-x': rem(10),
        '--button-fz': rem(10),
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
`,l=`
import { Button, rem, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': rem(60),
              '--button-padding-x': rem(30),
              '--button-fz': rem(24),
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': rem(24),
              '--button-padding-x': rem(10),
              '--button-fz': rem(10),
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
`,c=(e,t)=>"xxl"===t.size?{root:{"--button-height":(0,r.h)(60),"--button-padding-x":(0,r.h)(30),"--button-fz":(0,r.h)(24)}}:"xxs"===t.size?{root:{"--button-height":(0,r.h)(24),"--button-padding-x":(0,r.h)(10),"--button-fz":(0,r.h)(10)}}:{root:{}};i.z.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":(0,r.h)(60),"--button-padding-x":(0,r.h)(30),"--button-fz":(0,r.h)(24)}}:"xxs"===t.size?{root:{"--button-height":(0,r.h)(24),"--button-padding-x":(0,r.h)(10),"--button-fz":(0,r.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.z,{vars:c,size:"xxl",children:"XXL Button"}),(0,o.jsx)(i.z,{vars:c,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:l,language:"tsx",fileName:"MantineProvider.tsx"},{code:s,language:"tsx",fileName:"Inline.tsx"}]}},2498:function(e,t,n){"use strict";n.d(t,{D:function(){return m}});var o=n(52322),r=n(9197),i=n(46403),a=n(20754),s=n(58898),l=n(8943),c=n(68755),d=n(93010),u=n(39629);let h=e=>{let t=(0,r.B)(e),n=(0,i.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,a.m)(n.value,.1),hover:(0,a.m)(n.value,.15),border:`${(0,s.h)(1)} solid ${n.value}`,color:(0,l._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},m={type:"code",component:function(){return(0,o.jsx)(c.M2,{theme:{variantColorResolver:h},children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(u.z,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,o.jsx)(u.z,{color:"orange",variant:"light",children:"Orange light button"}),(0,o.jsx)(u.z,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
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
`}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=1021)}),_N_E=e.O()}]);
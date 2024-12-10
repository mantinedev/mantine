(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28632],{70902:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-api",function(){return t(21284)}])},21284:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(52322),s=t(45392),r=t(39629),a=t(76550),i=t(23344),l=t(23178),c=t(10069),d=t(28621),u=t(36569),m=t(25071),p=t(15019);let h=(0,m.A)(p.us.StylesApi);function x(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{DataTable:t,Demo:m}=n;return t||b("DataTable",!0),m||b("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsx)(n.h2,{id:"what-is-styles-api",children:"What is Styles API"}),"\n",(0,o.jsxs)(n.p,{children:["The styles API is a set of props and techniques that allows you to customize the style of any element\ninside a Mantine component – inline or using the ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"}),". All Mantine components that\nhave styles support Styles API."]}),"\n",(0,o.jsx)(n.h2,{id:"styles-api-selectors",children:"Styles API selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Every Mantine component that supports the styles API has a set of element names that can be used to\napply styles to inner elements inside the component. For simplicity, these elements names are called\nselectors in Mantine documentation. You can find selectors information under the ",(0,o.jsx)(n.code,{children:"Styles API"})," tab\nin a component's documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["Example of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component selectors:"]}),"\n",(0,o.jsx)(u.VX,{data:d.B,component:"Button",withTableBorder:!1,fixedLayout:!1}),"\n",(0,o.jsxs)(n.p,{children:["You can use these selectors in ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"})," in, both, component props and ",(0,o.jsx)(n.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button, createTheme, MantineProvider } from '@mantine/core';\n\nfunction ClassNamesDemo() {\n  return (\n    <Button\n      classNames={{\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nfunction StylesDemo() {\n  return (\n    <Button\n      styles={{\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      classNames: {\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      },\n      styles: {\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      },\n    }),\n  },\n});\n\nfunction ProviderDemo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Button>Button</Button>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"classnames-prop",children:"classNames prop"}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.code,{children:"classNames"})," prop you can add classes to inner elements of Mantine components. It accepts\nan object with element names as keys and classes as values:"]}),"\n",(0,o.jsx)(m,{data:a.A}),"\n",(0,o.jsx)(n.h2,{id:"classnames-in-themecomponents",children:"classNames in theme.components"}),"\n",(0,o.jsxs)(n.p,{children:["You can also define ",(0,o.jsx)(n.code,{children:"classNames"})," in ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:(0,o.jsx)(n.code,{children:"theme.components"})})," to apply them to all\ncomponents of a specific type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  createTheme,\n  MantineProvider,\n  TextInput,\n} from '@mantine/core';\n// Styles are the same as in previous example\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,o.jsxs)(n.p,{children:["Most of Mantine components use CSS variables to define colors, sizes, paddings and other\nproperties. You can override these values using a custom CSS variables resolver function\nin ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme.components"})," or by passing it to the ",(0,o.jsx)(n.code,{children:"vars"})," prop."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find CSS variables information under the ",(0,o.jsx)(n.code,{children:"Styles API"})," tab in a component's documentation.\nExample of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component CSS variables:"]}),"\n",(0,o.jsx)(u.$w,{data:d.B,withTableBorder:!1,fixedLayout:!1}),"\n",(0,o.jsxs)(n.p,{children:["Example of a custom CSS variables resolver function used to add more sizes to the ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(m,{data:i.g}),"\n",(0,o.jsx)(n.h2,{id:"styles-prop",children:"styles prop"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"styles"})," prop works the same way as ",(0,o.jsx)(n.code,{children:"classNames"}),", but applies inline styles. Note that inline\nstyles have higher specificity than classes, so you will not be able to override them with classes\nwithout using ",(0,o.jsx)(n.code,{children:"!important"}),". You cannot use pseudo-classes (for example, ",(0,o.jsx)(n.code,{children:":hover"}),", ",(0,o.jsx)(n.code,{children:":first-of-type"}),")\nand media queries inside the ",(0,o.jsx)(n.code,{children:"styles"})," prop."]}),"\n",(0,o.jsx)(m,{data:l.W}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"styles prop usage"})}),"\n",(0,o.jsxs)(n.p,{children:["Some examples and demos in the documentation use the ",(0,o.jsx)(n.code,{children:"styles"})," prop for convenience, but it is not\nrecommended to use the ",(0,o.jsx)(n.code,{children:"styles"})," prop as the primary means of styling components, as the ",(0,o.jsx)(n.code,{children:"classNames"}),"\nprop is more flexible and has ",(0,o.jsx)(n.a,{href:"/styles/styles-performance",children:"better performance"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"styles-api-based-on-component-props",children:"Styles API based on component props"}),"\n",(0,o.jsxs)(n.p,{children:["You can also pass a callback function to ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"}),". This function will receive\n",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," as first argument and component props as second. It should return\nan object of classes (for ",(0,o.jsx)(n.code,{children:"classNames"}),") or styles (for ",(0,o.jsx)(n.code,{children:"styles"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use this feature to conditionally apply styles based on component props. For example,\nyou can change the ",(0,o.jsx)(n.a,{href:"/core/text-input",children:"TextInput"})," label color if the input is required or change the input\nbackground color if the input is wrong:"]}),"\n",(0,o.jsx)(m,{data:c.B}),"\n",(0,o.jsx)(n.h2,{id:"static-classes",children:"Static classes"}),"\n",(0,o.jsxs)(n.p,{children:["Every component that supports Styles API also includes static classes that can be used to style\ncomponent without using ",(0,o.jsx)(n.code,{children:"classNames"})," or ",(0,o.jsx)(n.code,{children:"styles"})," props. By default, static classes have\n",(0,o.jsx)(n.code,{children:".mantine-{ComponentName}-{selector}"})," format. For example, ",(0,o.jsx)(n.code,{children:"root"})," selector of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),"\ncomponent will have ",(0,o.jsx)(n.code,{children:".mantine-Button-root"})," class."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use static classes to style a component with CSS or ",(0,o.jsx)(n.a,{href:"/styles/css-modules#styling-mantine-components-without-css-modules",children:"any other styling solution"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".mantine-Button-root {\n  background-color: red;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The prefix of static classes can be changed with ",(0,o.jsx)(n.code,{children:"classNamesPrefix"})," of ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider#classnamesprefix",children:"MantineProvider"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,o.jsxs)(n.p,{children:["Classes of each component are available in the ",(0,o.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind the classes of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," in ",(0,o.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,o.jsx)(t,{head:["Key","Class"],data:Object.keys(r.z.classes).map(e=>[e,r.z.classes[e]])}),"\n",(0,o.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(x,{...e})})}function b(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76550:function(e,n,t){"use strict";t.d(n,{A:function(){return a}});var o=t(52322),s=t(2784),r=t(74770);let a={type:"code",component:function(){let[e,n]=(0,s.useState)(""),[t,a]=(0,s.useState)(!1),i=t||e.length>0||void 0;return(0,o.jsx)(r.o,{label:"Floating label input",labelProps:{"data-floating":i},classNames:{root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"},onFocus:()=>a(!0),onBlur:()=>a(!1),value:e,onChange:e=>n(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.root {
  position: relative;
  margin-top: 5px;
}

.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 2px;
  border-radius: 0;
  padding-left: 0;
  background-color: var(--mantine-color-body);
}

.label {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 7px;
  color: var(--mantine-color-placeholder);
  font-weight: 400;
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease, transform 100ms ease, font-size 100ms ease;

  &[data-floating] {
    transform: translateY(-20px);
    font-size: var(--mantine-font-size-xs);
    color: var(--mantine-color-text);
  }
}
`}]}},10069:function(e,n,t){"use strict";t.d(n,{B:function(){return u}});var o=t(52322),s=t(40489),r=t(60231),a=t(74770),i=t(68755);let l=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,c=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,d=(0,r.j)({components:{TextInput:a.o.extend({classNames:(e,n)=>({label:(0,s.Z)({m_686577e7:n.required}),input:(0,s.Z)({m_933d67aa:n.error})})})}}),u={type:"code",component:function(){return(0,o.jsxs)(i.M2,{theme:d,children:[(0,o.jsx)(a.o,{required:!0,label:"Required input",placeholder:"Required input"}),(0,o.jsx)(a.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:c,language:"scss"}]}},23178:function(e,n,t){"use strict";t.d(n,{W:function(){return a}});var o=t(52322),s=t(39629),r=t(58898);let a={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,o.jsx)(s.z,{radius:"md",styles:{root:{padding:(0,r.h)(2),border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
import { Button, rem } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
`}},23344:function(e,n,t){"use strict";t.d(n,{g:function(){return d}});var o=t(52322),s=t(58898),r=t(39629),a=t(93010);let i=`
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
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,s.h)(60),"--button-padding-x":(0,s.h)(30),"--button-fz":(0,s.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,s.h)(24),"--button-padding-x":(0,s.h)(10),"--button-fz":(0,s.h)(10)}}:{root:{}};r.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,s.h)(60),"--button-padding-x":(0,s.h)(30),"--button-fz":(0,s.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,s.h)(24),"--button-padding-x":(0,s.h)(10),"--button-fz":(0,s.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.z,{vars:c,size:"xxl",children:"XXL Button"}),(0,o.jsx)(r.z,{vars:c,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:l,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=70902)}),_N_E=e.O()}]);
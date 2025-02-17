(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33556],{29669:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-api",function(){return t(97001)}])},97001:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var o=t(31085),s=t(71184),r=t(52022),a=t(43104),i=t(21934),l=t(60838),c=t(52591),d=t(80242),u=t(28115),p=t(85954),m=t(38215);let h=(0,p.P)(m.XZ.StylesApi);function x(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{DataTable:t,Demo:p}=n;return t||b("DataTable",!0),p||b("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsx)(n.h2,{id:"what-is-styles-api",children:"What is Styles API"}),"\n",(0,o.jsxs)(n.p,{children:["The styles API is a set of props and techniques that allows you to customize the style of any element\ninside a Mantine component – inline or using the ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"}),". All Mantine components that\nhave styles support Styles API."]}),"\n",(0,o.jsx)(n.h2,{id:"styles-api-selectors",children:"Styles API selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Every Mantine component that supports the styles API has a set of element names that can be used to\napply styles to inner elements inside the component. For simplicity, these elements names are called\nselectors in Mantine documentation. You can find selectors information under the ",(0,o.jsx)(n.code,{children:"Styles API"})," tab\nin a component's documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["Example of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component selectors:"]}),"\n",(0,o.jsx)(u.RN,{data:d.r,component:"Button",withTableBorder:!1,fixedLayout:!1}),"\n",(0,o.jsxs)(n.p,{children:["You can use these selectors in ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"})," in, both, component props and ",(0,o.jsx)(n.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button, createTheme, MantineProvider } from '@mantine/core';\n\nfunction ClassNamesDemo() {\n  return (\n    <Button\n      classNames={{\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nfunction StylesDemo() {\n  return (\n    <Button\n      styles={{\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      classNames: {\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      },\n      styles: {\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      },\n    }),\n  },\n});\n\nfunction ProviderDemo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Button>Button</Button>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"classnames-prop",children:"classNames prop"}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.code,{children:"classNames"})," prop you can add classes to inner elements of Mantine components. It accepts\nan object with element names as keys and classes as values:"]}),"\n",(0,o.jsx)(p,{data:a.x}),"\n",(0,o.jsx)(n.h2,{id:"classnames-in-themecomponents",children:"classNames in theme.components"}),"\n",(0,o.jsxs)(n.p,{children:["You can also define ",(0,o.jsx)(n.code,{children:"classNames"})," in ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:(0,o.jsx)(n.code,{children:"theme.components"})})," to apply them to all\ncomponents of a specific type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  createTheme,\n  MantineProvider,\n  TextInput,\n} from '@mantine/core';\n// Styles are the same as in previous example\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,o.jsxs)(n.p,{children:["Most of Mantine components use CSS variables to define colors, sizes, paddings and other\nproperties. You can override these values using a custom CSS variables resolver function\nin ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme.components"})," or by passing it to the ",(0,o.jsx)(n.code,{children:"vars"})," prop."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find CSS variables information under the ",(0,o.jsx)(n.code,{children:"Styles API"})," tab in a component's documentation.\nExample of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component CSS variables:"]}),"\n",(0,o.jsx)(u.oM,{data:d.r,withTableBorder:!1,fixedLayout:!1}),"\n",(0,o.jsxs)(n.p,{children:["Example of a custom CSS variables resolver function used to add more sizes to the ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(p,{data:i.f}),"\n",(0,o.jsx)(n.h2,{id:"styles-prop",children:"styles prop"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"styles"})," prop works the same way as ",(0,o.jsx)(n.code,{children:"classNames"}),", but applies inline styles. Note that inline\nstyles have higher specificity than classes, so you will not be able to override them with classes\nwithout using ",(0,o.jsx)(n.code,{children:"!important"}),". You cannot use pseudo-classes (for example, ",(0,o.jsx)(n.code,{children:":hover"}),", ",(0,o.jsx)(n.code,{children:":first-of-type"}),")\nand media queries inside the ",(0,o.jsx)(n.code,{children:"styles"})," prop."]}),"\n",(0,o.jsx)(p,{data:l.R}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"styles prop usage"})}),"\n",(0,o.jsxs)(n.p,{children:["Some examples and demos in the documentation use the ",(0,o.jsx)(n.code,{children:"styles"})," prop for convenience, but it is not\nrecommended to use the ",(0,o.jsx)(n.code,{children:"styles"})," prop as the primary means of styling components, as the ",(0,o.jsx)(n.code,{children:"classNames"}),"\nprop is more flexible and has ",(0,o.jsx)(n.a,{href:"/styles/styles-performance",children:"better performance"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"styles-api-based-on-component-props",children:"Styles API based on component props"}),"\n",(0,o.jsxs)(n.p,{children:["You can also pass a callback function to ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"}),". This function will receive\n",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," as first argument and component props as second. It should return\nan object of classes (for ",(0,o.jsx)(n.code,{children:"classNames"}),") or styles (for ",(0,o.jsx)(n.code,{children:"styles"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use this feature to conditionally apply styles based on component props. For example,\nyou can change the ",(0,o.jsx)(n.a,{href:"/core/text-input",children:"TextInput"})," label color if the input is required or change the input\nbackground color if the input is wrong:"]}),"\n",(0,o.jsx)(p,{data:c.f}),"\n",(0,o.jsx)(n.h2,{id:"static-classes",children:"Static classes"}),"\n",(0,o.jsxs)(n.p,{children:["Every component that supports Styles API also includes static classes that can be used to style\ncomponent without using ",(0,o.jsx)(n.code,{children:"classNames"})," or ",(0,o.jsx)(n.code,{children:"styles"})," props. By default, static classes have\n",(0,o.jsx)(n.code,{children:".mantine-{ComponentName}-{selector}"})," format. For example, ",(0,o.jsx)(n.code,{children:"root"})," selector of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),"\ncomponent will have ",(0,o.jsx)(n.code,{children:".mantine-Button-root"})," class."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use static classes to style a component with CSS or ",(0,o.jsx)(n.a,{href:"/styles/css-modules#styling-mantine-components-without-css-modules",children:"any other styling solution"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".mantine-Button-root {\n  background-color: red;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The prefix of static classes can be changed with ",(0,o.jsx)(n.code,{children:"classNamesPrefix"})," of ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider#classnamesprefix",children:"MantineProvider"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,o.jsxs)(n.p,{children:["Classes of each component are available in the ",(0,o.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind the classes of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," in ",(0,o.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,o.jsx)(t,{head:["Key","Class"],data:Object.keys(r.$.classes).map(e=>[e,r.$.classes[e]])}),"\n",(0,o.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(x,{...e})})}function b(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43104:(e,n,t)=>{"use strict";t.d(n,{x:()=>i});var o=t(31085),s=t(14041),r=t(90275),a={root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"};let i={type:"code",component:function(){let[e,n]=(0,s.useState)(""),[t,i]=(0,s.useState)(!1),l=t||e.length>0||void 0;return(0,o.jsx)(r.k,{label:"Floating label input",labelProps:{"data-floating":l},classNames:{root:a.root,input:a.input,label:a.label},onFocus:()=>i(!0),onBlur:()=>i(!1),value:e,onChange:e=>n(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},52591:(e,n,t)=>{"use strict";t.d(n,{f:()=>p});var o=t(31085),s=t(54357),r=t(12616),a=t(90275),i=t(92408),l={labelRequired:"m_686577e7",inputError:"m_933d67aa"};let c=`
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
`,d=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,u=(0,r.a)({components:{TextInput:a.k.extend({classNames:(e,n)=>({label:(0,s.A)({[l.labelRequired]:n.required}),input:(0,s.A)({[l.inputError]:n.error})})})}}),p={type:"code",component:function(){return(0,o.jsxs)(i.nW,{theme:u,children:[(0,o.jsx)(a.k,{required:!0,label:"Required input",placeholder:"Required input"}),(0,o.jsx)(a.k,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},60838:(e,n,t)=>{"use strict";t.d(n,{R:()=>r});var o=t(31085),s=t(52022);let r={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,o.jsx)(s.$,{radius:"md",styles:{root:{padding:2,border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: 2,
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
`}},21934:(e,n,t)=>{"use strict";t.d(n,{f:()=>c});var o=t(31085),s=t(52022),r=t(56051);let a=`
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
`,i=`
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
`,l=(e,n)=>"xxl"===n.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===n.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};s.$.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===n.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let c={type:"code",component:function(){return(0,o.jsxs)(r.Y,{children:[(0,o.jsx)(s.$,{vars:l,size:"xxl",children:"XXL Button"}),(0,o.jsx)(s.$,{vars:l,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:i,language:"tsx",fileName:"MantineProvider.tsx"},{code:a,language:"tsx",fileName:"Inline.tsx"}]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(29669)),_N_E=e.O()}]);
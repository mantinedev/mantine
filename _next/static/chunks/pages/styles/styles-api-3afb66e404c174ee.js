(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33556],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9805:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-api",function(){return n(36883)}])},18967:(e,t,n)=>{"use strict";n.d(t,{R:()=>r});var o=n(6029),s=n(61087);let r={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,o.jsx)(s.$,{radius:"md",styles:{root:{padding:2,border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
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
`}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},29523:(e,t,n)=>{"use strict";n.d(t,{f:()=>u});var o=n(6029),s=n(50212),r=n(17093),a=n(38774),i=n(49643),l={labelRequired:"m_686577e7",inputError:"m_933d67aa"};let c=`
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
`,p=(0,r.a)({components:{TextInput:a.k.extend({classNames:(e,t)=>({label:(0,s.A)({[l.labelRequired]:t.required}),input:(0,s.A)({[l.inputError]:t.error})})})}}),u={type:"code",component:function(){return(0,o.jsxs)(i.nW,{theme:p,children:[(0,o.jsx)(a.k,{required:!0,label:"Required input",placeholder:"Required input"}),(0,o.jsx)(a.k,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},33058:(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var o=n(6029),s=n(55729),r=n(38774),a={root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"};let i={type:"code",component:function(){let[e,t]=(0,s.useState)(""),[n,i]=(0,s.useState)(!1),l=n||e.length>0||void 0;return(0,o.jsx)(r.k,{label:"Floating label input",labelProps:{"data-floating":l},classNames:{root:a.root,input:a.input,label:a.label},onFocus:()=>i(!0),onBlur:()=>i(!1),value:e,onChange:e=>t(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o=n(6029),s=n(16285),r=n(61087),a=n(33058),i=n(77519),l=n(18967),c=n(29523),d=n(64107),p=n(96608),u=n(38547),h=n(5262);let m=(0,u.P)(h.XZ.StylesApi);function x(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{DataTable:n,Demo:u}=t;return n||f("DataTable",!0),u||f("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsx)(t.h2,{id:"what-is-styles-api",children:"What is Styles API"}),"\n",(0,o.jsxs)(t.p,{children:["The styles API is a set of props and techniques that allows you to customize the style of any element\ninside a Mantine component – inline or using the ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme object"}),". All Mantine components that\nhave styles support Styles API."]}),"\n",(0,o.jsx)(t.h2,{id:"styles-api-selectors",children:"Styles API selectors"}),"\n",(0,o.jsxs)(t.p,{children:["Every Mantine component that supports the styles API has a set of element names that can be used to\napply styles to inner elements inside the component. For simplicity, these elements names are called\nselectors in Mantine documentation. You can find selectors information under the ",(0,o.jsx)(t.code,{children:"Styles API"})," tab\nin a component's documentation."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component selectors:"]}),"\n",(0,o.jsx)(p.RN,{data:d.r,component:"Button",withTableBorder:!1,fixedLayout:!1}),"\n",(0,o.jsxs)(t.p,{children:["You can use these selectors in ",(0,o.jsx)(t.code,{children:"classNames"})," and ",(0,o.jsx)(t.code,{children:"styles"})," in, both, component props and ",(0,o.jsx)(t.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button, createTheme, MantineProvider } from '@mantine/core';\n\nfunction ClassNamesDemo() {\n  return (\n    <Button\n      classNames={{\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nfunction StylesDemo() {\n  return (\n    <Button\n      styles={{\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      classNames: {\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      },\n      styles: {\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      },\n    }),\n  },\n});\n\nfunction ProviderDemo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Button>Button</Button>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"classnames-prop",children:"classNames prop"}),"\n",(0,o.jsxs)(t.p,{children:["With the ",(0,o.jsx)(t.code,{children:"classNames"})," prop you can add classes to inner elements of Mantine components. It accepts\nan object with element names as keys and classes as values:"]}),"\n",(0,o.jsx)(u,{data:a.x}),"\n",(0,o.jsx)(t.h2,{id:"classnames-in-themecomponents",children:"classNames in theme.components"}),"\n",(0,o.jsxs)(t.p,{children:["You can also define ",(0,o.jsx)(t.code,{children:"classNames"})," in ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:(0,o.jsx)(t.code,{children:"theme.components"})})," to apply them to all\ncomponents of a specific type:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  createTheme,\n  MantineProvider,\n  TextInput,\n} from '@mantine/core';\n// Styles are the same as in previous example\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["Most of Mantine components use CSS variables to define colors, sizes, paddings and other\nproperties. You can override these values using a custom CSS variables resolver function\nin ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme.components"})," or by passing it to the ",(0,o.jsx)(t.code,{children:"vars"})," prop."]}),"\n",(0,o.jsxs)(t.p,{children:["You can find CSS variables information under the ",(0,o.jsx)(t.code,{children:"Styles API"})," tab in a component's documentation.\nExample of ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component CSS variables:"]}),"\n",(0,o.jsx)(p.oM,{data:d.r,withTableBorder:!1,fixedLayout:!1}),"\n",(0,o.jsxs)(t.p,{children:["Example of a custom CSS variables resolver function used to add more sizes to the ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(u,{data:i.f}),"\n",(0,o.jsx)(t.h2,{id:"styles-prop",children:"styles prop"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"styles"})," prop works the same way as ",(0,o.jsx)(t.code,{children:"classNames"}),", but applies inline styles. Note that inline\nstyles have higher specificity than classes, so you will not be able to override them with classes\nwithout using ",(0,o.jsx)(t.code,{children:"!important"}),". You cannot use pseudo-classes (for example, ",(0,o.jsx)(t.code,{children:":hover"}),", ",(0,o.jsx)(t.code,{children:":first-of-type"}),")\nand media queries inside the ",(0,o.jsx)(t.code,{children:"styles"})," prop."]}),"\n",(0,o.jsx)(u,{data:l.R}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"styles prop usage"})}),"\n",(0,o.jsxs)(t.p,{children:["Some examples and demos in the documentation use the ",(0,o.jsx)(t.code,{children:"styles"})," prop for convenience, but it is not\nrecommended to use the ",(0,o.jsx)(t.code,{children:"styles"})," prop as the primary means of styling components, as the ",(0,o.jsx)(t.code,{children:"classNames"}),"\nprop is more flexible and has ",(0,o.jsx)(t.a,{href:"/styles/styles-performance",children:"better performance"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"styles-api-based-on-component-props",children:"Styles API based on component props"}),"\n",(0,o.jsxs)(t.p,{children:["You can also pass a callback function to ",(0,o.jsx)(t.code,{children:"classNames"})," and ",(0,o.jsx)(t.code,{children:"styles"}),". This function will receive\n",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," as first argument and component props as second. It should return\nan object of classes (for ",(0,o.jsx)(t.code,{children:"classNames"}),") or styles (for ",(0,o.jsx)(t.code,{children:"styles"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["You can use this feature to conditionally apply styles based on component props. For example,\nyou can change the ",(0,o.jsx)(t.a,{href:"/core/text-input",children:"TextInput"})," label color if the input is required or change the input\nbackground color if the input is wrong:"]}),"\n",(0,o.jsx)(u,{data:c.f}),"\n",(0,o.jsx)(t.h2,{id:"static-classes",children:"Static classes"}),"\n",(0,o.jsxs)(t.p,{children:["Every component that supports Styles API also includes static classes that can be used to style\ncomponent without using ",(0,o.jsx)(t.code,{children:"classNames"})," or ",(0,o.jsx)(t.code,{children:"styles"})," props. By default, static classes have\n",(0,o.jsx)(t.code,{children:".mantine-{ComponentName}-{selector}"})," format. For example, ",(0,o.jsx)(t.code,{children:"root"})," selector of ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"}),"\ncomponent will have ",(0,o.jsx)(t.code,{children:".mantine-Button-root"})," class."]}),"\n",(0,o.jsxs)(t.p,{children:["You can use static classes to style a component with CSS or ",(0,o.jsx)(t.a,{href:"/styles/css-modules#styling-mantine-components-without-css-modules",children:"any other styling solution"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".mantine-Button-root {\n  background-color: red;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The prefix of static classes can be changed with ",(0,o.jsx)(t.code,{children:"classNamesPrefix"})," of ",(0,o.jsx)(t.a,{href:"/theming/mantine-provider#classnamesprefix",children:"MantineProvider"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,o.jsxs)(t.p,{children:["Classes of each component are available in the ",(0,o.jsx)(t.code,{children:"Component.classes"})," object. For example, you can\nfind the classes of ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," in ",(0,o.jsx)(t.code,{children:"Button.classes"}),":"]}),"\n",(0,o.jsx)(n,{head:["Key","Class"],data:Object.keys(r.$.classes).map(e=>[e,r.$.classes[e]])}),"\n",(0,o.jsx)(t.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,o.jsxs)(t.p,{children:["You can pass attributes to inner elements of Mantine components using the ",(0,o.jsx)(t.code,{children:"attributes"})," prop.\nFor example, it can be used to add data attributes for testing purposes:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      attributes={{\n        root: { 'data-test-id': 'root' },\n        label: { 'data-test-id': 'label' },\n        inner: { 'data-test-id': 'inner' },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(x,{...e})})}function f(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},77519:(e,t,n)=>{"use strict";n.d(t,{f:()=>c});var o=n(6029),s=n(61087),r=n(57414);let a=`
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
`,l=(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};s.$.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let c={type:"code",component:function(){return(0,o.jsxs)(r.Y,{children:[(0,o.jsx)(s.$,{vars:l,size:"xxl",children:"XXL Button"}),(0,o.jsx)(s.$,{vars:l,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:i,language:"tsx",fileName:"MantineProvider.tsx"},{code:a,language:"tsx",fileName:"Inline.tsx"}]}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=9805)),_N_E=e.O()}]);
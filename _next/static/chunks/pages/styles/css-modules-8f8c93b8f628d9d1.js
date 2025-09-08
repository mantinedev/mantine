(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89022],{1798:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},6941:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/css-modules",function(){return s(31588)}])},24583:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},31588:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>u});var t=s(6029),o=s(16285),l=s(38142),a=s(33058),i=s(38547),r=s(5262);let c=(0,i.P)(r.XZ.CSSModules);function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Demo:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"css-modules",children:"CSS modules"}),"\n",(0,t.jsx)(n.p,{children:"All Mantine components use CSS modules for styling.\nIt is recommended to use CSS modules in your project as well, but it is not required –\nMantine components are fully compatible with any third-party styling solution and native CSS."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["CSS modules are supported out of the box by all major frameworks and build tools. Usually, all you need\nto do is to create ",(0,t.jsx)(n.code,{children:"*.module.css"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"/* Button.module.css */\n.button {\n  color: red;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And then import it in your component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import classes from './Button.module.css';\n\nfunction Demo() {\n  return (\n    <button className={classes.button} type=\"button\">\n      Button\n    </button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-css-modules-work",children:"How CSS modules work"}),"\n",(0,t.jsxs)(n.p,{children:["When you create a ",(0,t.jsx)(n.code,{children:"*.module.css"})," file, your build tool will generate a unique class name for each class in your file.\nFor example, when you import the following file in your ",(0,t.jsx)(n.code,{children:".js"}),"/",(0,t.jsx)(n.code,{children:".ts"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"/* Button.module.css */\n.button {\n  color: red;\n}\n\n.text {\n  color: blue;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"You will get an object with unique class names:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import classes from './Button.module.css';\n\nconsole.log(classes);\n// -> Object of scoped class names: key is a class name, value is a generated unique class name\n// { button: 'button-Xh3s7ER', text: 'text-js65s3Se' }\n// Note that generated class names may vary depending on your build tool\n"})}),"\n",(0,t.jsx)(n.p,{children:"With CSS modules, you do not need to worry about class name collisions, you can use any class name you want."}),"\n",(0,t.jsx)(n.h2,{id:"referencing-global-class-names",children:"Referencing global class names"}),"\n",(0,t.jsxs)(n.p,{children:["To reference global class names in CSS Modules, you can use ",(0,t.jsx)(n.code,{children:":global"})," selector:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:".test {\n  & :global(.global-class-name) {\n    color: red;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The code above will compile to the following CSS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".m-dj3w33 .global-class-name {\n  color: red;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-styles-to-mantine-components",children:"Adding styles to Mantine components"}),"\n",(0,t.jsxs)(n.p,{children:["You can add styles to most of Mantine components using ",(0,t.jsx)(n.code,{children:"className"})," prop\n– the same way as you would do with a regular HTML element.\nTo set properties to your ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," values, you can use ",(0,t.jsx)(n.a,{href:"/styles/css-variables",children:"Mantine CSS variables"}),":"]}),"\n",(0,t.jsx)(s,{data:l.s}),"\n",(0,t.jsxs)(n.p,{children:["To apply styles to inner elements of Mantine components with CSS modules, you can use ",(0,t.jsx)(n.code,{children:"classNames"})," prop\n(see ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," for more information):"]}),"\n",(0,t.jsx)(s,{data:a.x}),"\n",(0,t.jsx)(n.h2,{id:"styling-mantine-components-without-css-modules",children:"Styling Mantine components without CSS modules"}),"\n",(0,t.jsx)(n.p,{children:"All Mantine components are fully compatible with any third-party styling solution and native CSS.\nThere are two main strategies to apply styles with a third-party library:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"className"}),", ",(0,t.jsx)(n.code,{children:"classNames"}),", ",(0,t.jsx)(n.code,{children:"style"})," and ",(0,t.jsx)(n.code,{children:"styles"})," props"]}),"\n",(0,t.jsxs)(n.li,{children:["with static selectors, for example ",(0,t.jsx)(n.code,{children:".mantine-Text-root"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of applying styles with a utility CSS library:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TextInput\n      classNames={{\n        root: 'mt-4',\n        input: 'bg-red-500 text-white',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example of applying styles with global CSS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"/* styles.css */\n\n/* Note that these styles are not scoped and\n   will be applied to all TextInput components */\n.mantine-TextInput-root {\n  margin-top: 0.8rem;\n}\n\n.mantine-TextInput-input {\n  background-color: var(--mantine-color-red-filled);\n  color: var(--mantine-color-white);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can combine both approaches to achieve desired results, for example,\n",(0,t.jsx)(n.code,{children:"@emotion/styled"})," and ",(0,t.jsx)(n.code,{children:"styled-components"})," packages will pass ",(0,t.jsx)(n.code,{children:"className"})," prop to\na given component, and you can use static selectors to style inner elements:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import styled from '@emotion/styled';\nimport { Slider } from '@mantine/core';\n\nconst StyledSlider = styled(Slider)`\n  & .mantine-Slider-bar {\n    background-color: var(--mantine-color-pink-5);\n  }\n\n  & .mantine-Slider-thumb {\n    border-color: var(--mantine-color-pink-5);\n    background-color: white;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n`;\n\nfunction Demo() {\n  return <StyledSlider defaultValue={40} />;\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Consider using CSS modules first"})}),"\n",(0,t.jsx)(n.p,{children:"CSS modules are the recommended way of styling Mantine components.\nBefore choosing another styling solution, make sure that CSS modules do not fit your needs.\nOther solutions have limitations, for example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is hard to customize styles based on ",(0,t.jsx)(n.a,{href:"/styles/data-attributes",children:"data-* attributes"})," when using utility-based CSS libraries"]}),"\n",(0,t.jsxs)(n.li,{children:["It is impossible to style inner elements of Mantine components with static selectors when using styled-components and other similar libraries if component uses ",(0,t.jsx)(n.a,{href:"/core/portal",children:"Portal"})," because some elements will be rendered outside of the component root and inner elements are not part of the component tree"]}),"\n"]}),"\n"]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,{...e,children:(0,t.jsx)(d,{...e})})}},33058:(e,n,s)=>{"use strict";s.d(n,{x:()=>i});var t=s(6029),o=s(55729),l=s(38774),a={root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"};let i={type:"code",component:function(){let[e,n]=(0,o.useState)(""),[s,i]=(0,o.useState)(!1),r=s||e.length>0||void 0;return(0,t.jsx)(l.k,{label:"Floating label input",labelProps:{"data-floating":r},classNames:{root:a.root,input:a.input,label:a.label},onFocus:()=>i(!0),onBlur:()=>i(!1),value:e,onChange:e=>n(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},34891:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},38142:(e,n,s)=>{"use strict";s.d(n,{s:()=>a});var t=s(6029),o=s(76320),l={box:"m_3b7b8cc2",highlight:"m_b0c0466b"};let a={type:"code",component:function(){return(0,t.jsxs)(o.a,{className:l.box,children:["Box component with ",(0,t.jsx)("span",{className:l.highlight,children:"some styles"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.box {
  font-size: var(--mantine-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 4px 10px;
  display: inline-block;
  border-radius: var(--mantine-radius-md);
  background: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);
}
`}]}},41949:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});let t=(0,s(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=6941)),_N_E=e.O()}]);
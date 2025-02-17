(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15990],{59925:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-performance",function(){return t(83295)}])},83295:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var s=t(31085),o=t(71184),r=t(41718),l=t(43104),a=t(60838),i=t(85954),c=t(38215);let d=(0,i.P)(c.XZ.StylesPerformance);function p(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"styles-performance",children:"Styles performance"}),"\n",(0,s.jsx)(n.h2,{id:"css-modules",children:"CSS modules"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is the most performant way to apply styles –\nthis approach generates static CSS that is never re-evaluated. 99% of Mantine components\nstyles are generated with CSS modules – components are optimized out of the box."]}),"\n",(0,s.jsxs)(n.p,{children:["In most cases, it is recommended to use ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style your components as well.\nYou can apply styles to HTML elements with ",(0,s.jsx)(n.code,{children:"className"})," prop and to Mantine components with ",(0,s.jsx)(n.code,{children:"className"}),",\n",(0,s.jsx)(n.code,{children:"classNames"})," props."]}),"\n",(0,s.jsxs)(n.p,{children:["Applying styles with ",(0,s.jsx)(n.code,{children:"className"}),":"]}),"\n",(0,s.jsx)(t,{data:r.s}),"\n",(0,s.jsxs)(n.p,{children:["Applying styles with ",(0,s.jsx)(n.code,{children:"classNames"})," (see ",(0,s.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API guide"})," to learn more):"]}),"\n",(0,s.jsx)(t,{data:l.x}),"\n",(0,s.jsx)(n.h2,{id:"inline-styles",children:"Inline styles"}),"\n",(0,s.jsxs)(n.p,{children:["Inline styles (",(0,s.jsx)(n.code,{children:"style"})," and ",(0,s.jsx)(n.code,{children:"styles"})," props) are less performant than CSS modules, but still\nperformant enough to be used in most cases if it is your preferred way of styling in your project."]}),"\n",(0,s.jsx)(n.p,{children:"Inline styles caveats:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Styles are not reused between components, each component will generate its own styles, for example,\nif you have 100 buttons with the same styles, CSS modules will generate 1 class for all of them,\ninline styles will generate 100 ",(0,s.jsx)(n.code,{children:"style"})," attributes"]}),"\n",(0,s.jsx)(n.li,{children:"If inline styles are overused, it can increase bundle size and output HTML size"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Not performance related"}),": inline styles have higher specificity than CSS modules, so if you want\nto override inline styles you will have to use ",(0,s.jsx)(n.code,{children:"!important"})," or use another inline styles"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example of inline styles:"}),"\n",(0,s.jsx)(t,{data:a.R}),"\n",(0,s.jsx)(n.h2,{id:"style-props",children:"Style props"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/styles/style-props",children:"Style props"})," transform component props into inline styles. Style props have\nthe same caveats as inline styles, it is not recommended to use them as the primary means of styling\nyour components. Usually, style props are used to apply 1–3 styles to a component – using them\nthis way does not impact performance."]}),"\n",(0,s.jsx)(n.h2,{id:"responsive-style-props",children:"Responsive style props"}),"\n",(0,s.jsxs)(n.p,{children:["Responsive ",(0,s.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," have worse performance than regular style props\nbecause they require injecting ",(0,s.jsx)(n.code,{children:"<style />"})," tag next to the component. It is fine to use responsive\nstyle props to apply styles to several components, but it is not recommended to use\nthem in large lists of components, for example, if you have 1000 inputs with responsive margins,\nit is better to refactor to use ",(0,s.jsx)(n.code,{children:"classNames"})," prop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Ok, style props are used to apply margin-top property to several components\nfunction StyleProps() {\n  return (\n    <>\n      <TextInput label="Input 1" />\n      <TextInput label="Input 2" mt={{ base: 10, md: 20 }} />\n      <TextInput label="Input 3" mt={{ base: 10, md: 20 }} />\n    </>\n  );\n}\n\n// Worse, 1000 separate `<style />` tags will be generated\n// Better to refactor to use className prop\nfunction StylePropsArray() {\n  const inputs = Array(1000)\n    .fill(0)\n    .map((_, index) => (\n      <TextInput\n        key={index}\n        label={`Input ${index}`}\n        mt={{ base: 10, md: 20 }}\n      />\n    ));\n\n  return <>{inputs}</>;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"components-responsive-props",children:"Components responsive props"}),"\n",(0,s.jsxs)(n.p,{children:["Some components, like ",(0,s.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," and ",(0,s.jsx)(n.a,{href:"/core/grid",children:"Grid"}),"\nrely on the same mechanism as responsive style props to apply styles. The limitations are the same\n– it is fine to use these several of these components on a page, but it is not recommended to use\nthem in large lists of components."]})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(d,{...e,children:(0,s.jsx)(p,{...e})})}},41718:(e,n,t)=>{"use strict";t.d(n,{s:()=>l});var s=t(31085),o=t(34056),r={box:"m_3b7b8cc2",highlight:"m_b0c0466b"};let l={type:"code",component:function(){return(0,s.jsxs)(o.a,{className:r.box,children:["Box component with ",(0,s.jsx)("span",{className:r.highlight,children:"some styles"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},43104:(e,n,t)=>{"use strict";t.d(n,{x:()=>a});var s=t(31085),o=t(14041),r=t(90275),l={root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"};let a={type:"code",component:function(){let[e,n]=(0,o.useState)(""),[t,a]=(0,o.useState)(!1),i=t||e.length>0||void 0;return(0,s.jsx)(r.k,{label:"Floating label input",labelProps:{"data-floating":i},classNames:{root:l.root,input:l.input,label:l.label},onFocus:()=>a(!0),onBlur:()=>a(!1),value:e,onChange:e=>n(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},60838:(e,n,t)=>{"use strict";t.d(n,{R:()=>r});var s=t(31085),o=t(52022);let r={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,s.jsx)(o.$,{radius:"md",styles:{root:{padding:2,border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
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
`}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(59925)),_N_E=e.O()}]);
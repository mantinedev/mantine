(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15990],{1798:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},10197:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-performance",function(){return s(90149)}])},18967:(e,t,s)=>{"use strict";s.d(t,{R:()=>a});var n=s(6029),o=s(61087);let a={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,n.jsx)(o.$,{radius:"md",styles:{root:{padding:2,border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
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
`}},24583:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},33058:(e,t,s)=>{"use strict";s.d(t,{x:()=>r});var n=s(6029),o=s(55729),a=s(38774),l={root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"};let r={type:"code",component:function(){let[e,t]=(0,o.useState)(""),[s,r]=(0,o.useState)(!1),i=s||e.length>0||void 0;return(0,n.jsx)(a.k,{label:"Floating label input",labelProps:{"data-floating":i},classNames:{root:l.root,input:l.input,label:l.label},onFocus:()=>r(!0),onBlur:()=>r(!1),value:e,onChange:e=>t(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},34891:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},38142:(e,t,s)=>{"use strict";s.d(t,{s:()=>l});var n=s(6029),o=s(76320),a={box:"m_3b7b8cc2",highlight:"m_b0c0466b"};let l={type:"code",component:function(){return(0,n.jsxs)(o.a,{className:a.box,children:["Box component with ",(0,n.jsx)("span",{className:a.highlight,children:"some styles"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},41949:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});let n=(0,s(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90149:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var n=s(6029),o=s(16285),a=s(38142),l=s(33058),r=s(18967),i=s(38547),d=s(5262);let c=(0,i.P)(d.XZ.StylesPerformance);function p(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"styles-performance",children:"Styles performance"}),"\n",(0,n.jsx)(t.h2,{id:"css-modules",children:"CSS modules"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/styles/css-modules",children:"CSS modules"})," is the most performant way to apply styles –\nthis approach generates static CSS that is never re-evaluated. 99% of Mantine components\nstyles are generated with CSS modules – components are optimized out of the box."]}),"\n",(0,n.jsxs)(t.p,{children:["In most cases, it is recommended to use ",(0,n.jsx)(t.a,{href:"/styles/css-modules",children:"CSS modules"})," to style your components as well.\nYou can apply styles to HTML elements with ",(0,n.jsx)(t.code,{children:"className"})," prop and to Mantine components with ",(0,n.jsx)(t.code,{children:"className"}),",\n",(0,n.jsx)(t.code,{children:"classNames"})," props."]}),"\n",(0,n.jsxs)(t.p,{children:["Applying styles with ",(0,n.jsx)(t.code,{children:"className"}),":"]}),"\n",(0,n.jsx)(s,{data:a.s}),"\n",(0,n.jsxs)(t.p,{children:["Applying styles with ",(0,n.jsx)(t.code,{children:"classNames"})," (see ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API guide"})," to learn more):"]}),"\n",(0,n.jsx)(s,{data:l.x}),"\n",(0,n.jsx)(t.h2,{id:"inline-styles",children:"Inline styles"}),"\n",(0,n.jsxs)(t.p,{children:["Inline styles (",(0,n.jsx)(t.code,{children:"style"})," and ",(0,n.jsx)(t.code,{children:"styles"})," props) are less performant than CSS modules, but still\nperformant enough to be used in most cases if it is your preferred way of styling in your project."]}),"\n",(0,n.jsx)(t.p,{children:"Inline styles caveats:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Styles are not reused between components, each component will generate its own styles, for example,\nif you have 100 buttons with the same styles, CSS modules will generate 1 class for all of them,\ninline styles will generate 100 ",(0,n.jsx)(t.code,{children:"style"})," attributes"]}),"\n",(0,n.jsx)(t.li,{children:"If inline styles are overused, it can increase bundle size and output HTML size"}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Not performance related"}),": inline styles have higher specificity than CSS modules, so if you want\nto override inline styles you will have to use ",(0,n.jsx)(t.code,{children:"!important"})," or use another inline styles"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example of inline styles:"}),"\n",(0,n.jsx)(s,{data:r.R}),"\n",(0,n.jsx)(t.h2,{id:"style-props",children:"Style props"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/styles/style-props",children:"Style props"})," transform component props into inline styles. Style props have\nthe same caveats as inline styles, it is not recommended to use them as the primary means of styling\nyour components. Usually, style props are used to apply 1–3 styles to a component – using them\nthis way does not impact performance."]}),"\n",(0,n.jsx)(t.h2,{id:"responsive-style-props",children:"Responsive style props"}),"\n",(0,n.jsxs)(t.p,{children:["Responsive ",(0,n.jsx)(t.a,{href:"/styles/style-props",children:"style props"})," have worse performance than regular style props\nbecause they require injecting ",(0,n.jsx)(t.code,{children:"<style />"})," tag next to the component. It is fine to use responsive\nstyle props to apply styles to several components, but it is not recommended to use\nthem in large lists of components, for example, if you have 1000 inputs with responsive margins,\nit is better to refactor to use ",(0,n.jsx)(t.code,{children:"classNames"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Ok, style props are used to apply margin-top property to several components\nfunction StyleProps() {\n  return (\n    <>\n      <TextInput label="Input 1" />\n      <TextInput label="Input 2" mt={{ base: 10, md: 20 }} />\n      <TextInput label="Input 3" mt={{ base: 10, md: 20 }} />\n    </>\n  );\n}\n\n// Worse, 1000 separate `<style />` tags will be generated\n// Better to refactor to use className prop\nfunction StylePropsArray() {\n  const inputs = Array(1000)\n    .fill(0)\n    .map((_, index) => (\n      <TextInput\n        key={index}\n        label={`Input ${index}`}\n        mt={{ base: 10, md: 20 }}\n      />\n    ));\n\n  return <>{inputs}</>;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"components-responsive-props",children:"Components responsive props"}),"\n",(0,n.jsxs)(t.p,{children:["Some components, like ",(0,n.jsx)(t.a,{href:"/core/simple-grid",children:"SimpleGrid"})," and ",(0,n.jsx)(t.a,{href:"/core/grid",children:"Grid"}),"\nrely on the same mechanism as responsive style props to apply styles. The limitations are the same\n– it is fine to use these several of these components on a page, but it is not recommended to use\nthem in large lists of components."]})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(c,{...e,children:(0,n.jsx)(p,{...e})})}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=10197)),_N_E=e.O()}]);
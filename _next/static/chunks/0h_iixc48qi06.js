(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var i=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var r in e)i(n,r,{get:e[r],enumerable:!0});return t||i(n,Symbol.toStringTag,{value:"Module"}),n}])},27905,e=>{"use strict";var i=e.i(648863),t=e.i(804052),n=e.i(391398);let r={type:"code",code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Title,{order:1,children:"This is h1 title"}),(0,n.jsx)(t.Title,{order:2,children:"This is h2 title"}),(0,n.jsx)(t.Title,{order:3,children:"This is h3 title"}),(0,n.jsx)(t.Title,{order:4,children:"This is h4 title"}),(0,n.jsx)(t.Title,{order:5,children:"This is h5 title"}),(0,n.jsx)(t.Title,{order:6,children:"This is h6 title"})]})}},o={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Title,{order:3,size:"h1",children:"H3 heading with h1 font-size"}),(0,n.jsx)(t.Title,{size:"h4",children:"H1 heading with h4 font-size"}),(0,n.jsx)(t.Title,{size:16,children:"H1 heading with 16px size"}),(0,n.jsx)(t.Title,{size:"xs",children:"H1 heading with xs size"})]})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={16}>H1 heading with 16px size</Title>
      <Title size="xs">H1 heading with xs size</Title>
    </>
  );
}
`};var s=e.i(232471);let l={type:"configurator",component:function(e){return(0,n.jsx)(s.Box,{maw:400,children:(0,n.jsx)(t.Title,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]},d={type:"configurator",component:function(e){return(0,n.jsx)(t.Title,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]};var a=(0,i.__exportAll)({lineClamp:()=>l,size:()=>o,textWrap:()=>d,usage:()=>r});e.s(["TitleDemos",0,a],27905)},393389,e=>{"use strict";var i=e.i(391398),t=e.i(38856),n=e.i(27905);e.i(603441);var r=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,r.Layout)(o.MDX_DATA.Title);function l(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(r.p,{children:["Use the Title component to render h1-h6 headings with Mantine ",(0,i.jsx)(r.a,{href:"/theming/theme-object",children:"theme"})," styles.\nBy default, ",(0,i.jsx)(r.code,{children:"Title"})," has no margins and paddings.\nYou can change ",(0,i.jsx)(r.code,{children:"font-size"}),", ",(0,i.jsx)(r.code,{children:"font-weight"})," and ",(0,i.jsx)(r.code,{children:"line-height"})," per heading with ",(0,i.jsx)(r.a,{href:"/theming/typography",children:"theme.headings"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Set the ",(0,i.jsx)(r.code,{children:"order"})," prop to render a specific element (h1-h6); the default order is ",(0,i.jsx)(r.code,{children:"1"}),":"]}),"\n",(0,i.jsx)(o,{data:n.TitleDemos.usage}),"\n",(0,i.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,i.jsxs)(r.p,{children:["You can change the Title ",(0,i.jsx)(r.code,{children:"size"})," independent of its ",(0,i.jsx)(r.code,{children:"order"}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["If you set the size to ",(0,i.jsx)(r.code,{children:"h1"}),"-",(0,i.jsx)(r.code,{children:"h6"}),", then the component will add corresponding ",(0,i.jsx)(r.code,{children:"font-size"})," and ",(0,i.jsx)(r.code,{children:"line-height"})," from the ",(0,i.jsx)(r.a,{href:"/theming/theme-object/",children:"theme"})]}),"\n",(0,i.jsxs)(r.li,{children:["If you set the size to any other value, then ",(0,i.jsx)(r.code,{children:"line-height"})," will be calculated based on ",(0,i.jsx)(r.code,{children:"order"})," – ",(0,i.jsx)(r.code,{children:"size"})," will impact only ",(0,i.jsx)(r.code,{children:"font-size"})]}),"\n"]}),"\n",(0,i.jsx)(o,{data:n.TitleDemos.size}),"\n",(0,i.jsx)(r.h2,{id:"text-wrap",children:"Text wrap"}),"\n",(0,i.jsxs)(r.p,{children:["Use the ",(0,i.jsx)(r.code,{children:"textWrap"})," prop to control the ",(0,i.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,i.jsx)(o,{data:n.TitleDemos.textWrap}),"\n",(0,i.jsxs)(r.p,{children:["You can also set ",(0,i.jsx)(r.code,{children:"textWrap"})," on ",(0,i.jsx)(r.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,i.jsxs)(r.p,{children:["Set the ",(0,i.jsx)(r.code,{children:"lineClamp"})," prop to truncate text after the specified number of lines:"]}),"\n",(0,i.jsx)(o,{data:n.TitleDemos.lineClamp})]})}e.s(["default",0,function(e={}){return(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})})}])},55943,(e,i,t)=>{let n="/core/title";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(393389)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(i=>Promise.all(["static/chunks/22379_btw709h.js"].map(i=>e.l(i))).then(()=>i(493594)))},828805,e=>{e.v(i=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(i=>e.l(i))).then(()=>i(879466)))}]);
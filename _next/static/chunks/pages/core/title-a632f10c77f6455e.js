(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75842],{26813:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/title",function(){return t(67243)}])},67243:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>m});var n=t(31085),r=t(71184),o=t(50371),s=t(61195);let l={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h,{order:3,size:"h1",children:"H3 heading with h1 font-size"}),(0,n.jsx)(s.h,{size:"h4",children:"H1 heading with h4 font-size"}),(0,n.jsx)(s.h,{size:16,children:"H1 heading with 16px size"}),(0,n.jsx)(s.h,{size:"xs",children:"H1 heading with xs size"})]})},code:`
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
`};var d=t(14011),a=t(61),c=t(85954),h=t(38215);let u=(0,c.P)(h.XZ.Title);function p(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:["Use Title component to render h1-h6 headings with Mantine ",(0,n.jsx)(i.a,{href:"/theming/theme-object",children:"theme"})," styles.\nBy default, ",(0,n.jsx)(i.code,{children:"Title"})," has no margins and paddings.\nYou can change ",(0,n.jsx)(i.code,{children:"font-size"}),", ",(0,n.jsx)(i.code,{children:"font-weight"})," and ",(0,n.jsx)(i.code,{children:"line-height"})," per heading with ",(0,n.jsx)(i.a,{href:"/theming/typography",children:"theme.headings"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"order"})," prop to render a specific element (h1-h6), default order is ",(0,n.jsx)(i.code,{children:"1"}),":"]}),"\n",(0,n.jsx)(t,{data:o.C}),"\n",(0,n.jsx)(i.h2,{id:"size",children:"Size"}),"\n",(0,n.jsxs)(i.p,{children:["You can change Title ",(0,n.jsx)(i.code,{children:"size"})," independent of its ",(0,n.jsx)(i.code,{children:"order"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["If you set size to ",(0,n.jsx)(i.code,{children:"h1"}),"-",(0,n.jsx)(i.code,{children:"h6"}),", then component will add corresponding ",(0,n.jsx)(i.code,{children:"font-size"})," and ",(0,n.jsx)(i.code,{children:"line-height"})," from the ",(0,n.jsx)(i.a,{href:"/theming/theme-object/",children:"theme"})]}),"\n",(0,n.jsxs)(i.li,{children:["If you set size to any other value, then ",(0,n.jsx)(i.code,{children:"line-height"})," will be calculated based on ",(0,n.jsx)(i.code,{children:"order"})," – ",(0,n.jsx)(i.code,{children:"size"})," will impact only ",(0,n.jsx)(i.code,{children:"font-size"})]}),"\n"]}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(i.h2,{id:"text-wrap",children:"Text wrap"}),"\n",(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"textWrap"})," prop to control ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,n.jsx)(t,{data:d.I}),"\n",(0,n.jsxs)(i.p,{children:["You can also set ",(0,n.jsx)(i.code,{children:"textWrap"})," on ",(0,n.jsx)(i.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"lineClamp"})," prop to truncate text after specified number of lines:"]}),"\n",(0,n.jsx)(t,{data:a.I})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(u,{...e,children:(0,n.jsx)(p,{...e})})}},61:(e,i,t)=>{"use strict";t.d(i,{I:()=>s});var n=t(31085),r=t(34056),o=t(61195);let s={type:"configurator",component:function(e){return(0,n.jsx)(r.a,{maw:400,children:(0,n.jsx)(o.h,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
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
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]}},14011:(e,i,t)=>{"use strict";t.d(i,{I:()=>o});var n=t(31085),r=t(61195);let o={type:"configurator",component:function(e){return(0,n.jsx)(r.h,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]}},50371:(e,i,t)=>{"use strict";t.d(i,{C:()=>o});var n=t(31085),r=t(61195);let o={type:"code",code:`
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
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h,{order:1,children:"This is h1 title"}),(0,n.jsx)(r.h,{order:2,children:"This is h2 title"}),(0,n.jsx)(r.h,{order:3,children:"This is h3 title"}),(0,n.jsx)(r.h,{order:4,children:"This is h4 title"}),(0,n.jsx)(r.h,{order:5,children:"This is h5 title"}),(0,n.jsx)(r.h,{order:6,children:"This is h6 title"})]})}}}},e=>{var i=i=>e(e.s=i);e.O(0,[67456,39699,68831,90636,46593,38792],()=>i(26813)),_N_E=e.O()}]);
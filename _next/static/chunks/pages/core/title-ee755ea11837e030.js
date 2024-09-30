(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1206],{48166:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/title",function(){return t(61017)}])},61017:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var n=t(52322),r=t(45392),o=t(89885),s=t(94120);let l={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.D,{order:3,size:"h1",children:"H3 heading with h1 font-size"}),(0,n.jsx)(s.D,{size:"h4",children:"H1 heading with h4 font-size"}),(0,n.jsx)(s.D,{size:"1rem",children:"H1 heading with 1rem size"}),(0,n.jsx)(s.D,{size:"xs",children:"H1 heading with xs size"})]})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="1rem">H1 heading with 1rem size</Title>
      <Title size="xs">H1 heading with xs size</Title>
    </>
  );
}
`};var d=t(22611),c=t(14296),a=t(25071),h=t(15019);let u=(0,a.A)(h.us.Title);function m(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:["Use Title component to render h1-h6 headings with Mantine ",(0,n.jsx)(i.a,{href:"/theming/theme-object",children:"theme"})," styles.\nBy default, ",(0,n.jsx)(i.code,{children:"Title"})," has no margins and paddings.\nYou can change ",(0,n.jsx)(i.code,{children:"font-size"}),", ",(0,n.jsx)(i.code,{children:"font-weight"})," and ",(0,n.jsx)(i.code,{children:"line-height"})," per heading with ",(0,n.jsx)(i.a,{href:"/theming/typography",children:"theme.headings"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"order"})," prop to render a specific element (h1-h6), default order is ",(0,n.jsx)(i.code,{children:"1"}),":"]}),"\n",(0,n.jsx)(t,{data:o.j}),"\n",(0,n.jsx)(i.h2,{id:"size",children:"Size"}),"\n",(0,n.jsxs)(i.p,{children:["You can change Title ",(0,n.jsx)(i.code,{children:"size"})," independent of its ",(0,n.jsx)(i.code,{children:"order"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["If you set size to ",(0,n.jsx)(i.code,{children:"h1"}),"-",(0,n.jsx)(i.code,{children:"h6"}),", then component will add corresponding ",(0,n.jsx)(i.code,{children:"font-size"})," and ",(0,n.jsx)(i.code,{children:"line-height"})," from the ",(0,n.jsx)(i.a,{href:"/theming/theme-object/",children:"theme"})]}),"\n",(0,n.jsxs)(i.li,{children:["If you set size to any other value, then ",(0,n.jsx)(i.code,{children:"line-height"})," will be calculated based on ",(0,n.jsx)(i.code,{children:"order"})," – ",(0,n.jsx)(i.code,{children:"size"})," will impact only ",(0,n.jsx)(i.code,{children:"font-size"})]}),"\n"]}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(i.h2,{id:"text-wrap",children:"Text wrap"}),"\n",(0,n.jsxs)(i.p,{children:["Use ",(0,n.jsx)(i.code,{children:"textWrap"})," prop to control ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,n.jsx)(t,{data:d.V}),"\n",(0,n.jsxs)(i.p,{children:["You can also set ",(0,n.jsx)(i.code,{children:"textWrap"})," on ",(0,n.jsx)(i.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Title } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"lineClamp"})," prop to truncate text after specified number of lines:"]}),"\n",(0,n.jsx)(t,{data:c.S})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(u,{...e,children:(0,n.jsx)(m,{...e})})}},14296:function(e,i,t){"use strict";t.d(i,{S:function(){return s}});var n=t(52322),r=t(28559),o=t(94120);let s={type:"configurator",component:function(e){return(0,n.jsx)(r.x,{maw:400,children:(0,n.jsx)(o.D,{order:2,...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"})})},code:`
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
`,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]}},22611:function(e,i,t){"use strict";t.d(i,{V:function(){return o}});var n=t(52322),r=t(94120);let o={type:"configurator",component:function(e){return(0,n.jsx)(r.D,{order:3,...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]}},89885:function(e,i,t){"use strict";t.d(i,{j:function(){return o}});var n=t(52322),r=t(94120);let o={type:"code",code:`
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
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.D,{order:1,children:"This is h1 title"}),(0,n.jsx)(r.D,{order:2,children:"This is h2 title"}),(0,n.jsx)(r.D,{order:3,children:"This is h3 title"}),(0,n.jsx)(r.D,{order:4,children:"This is h4 title"}),(0,n.jsx)(r.D,{order:5,children:"This is h5 title"}),(0,n.jsx)(r.D,{order:6,children:"This is h6 title"})]})}}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=48166)}),_N_E=e.O()}]);
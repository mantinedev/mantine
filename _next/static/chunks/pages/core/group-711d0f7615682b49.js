(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85402],{27201:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/group",function(){return n(28341)}])},28341:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(52322),o=n(45392),i=n(88122),a=n(28559),l=n(8582),d=n(93010),c=n(39629);let s={type:"code",component:function(){return(0,r.jsx)(a.x,{style:{overflow:"hidden"},children:(0,r.jsxs)(a.x,{maw:500,p:"md",mx:"auto",bg:"var(--mantine-color-blue-light)",children:[(0,r.jsx)(l.x,{size:"sm",mb:5,children:"preventGrowOverflow: true – each child width is always limited to 33% of parent width (since there are 3 children)"}),(0,r.jsxs)(d.Z,{grow:!0,wrap:"nowrap",children:[(0,r.jsx)(c.z,{variant:"default",children:"First button"}),(0,r.jsx)(c.z,{variant:"default",children:"Second button with large content"}),(0,r.jsx)(c.z,{variant:"default",children:"Third button"})]}),(0,r.jsx)(l.x,{size:"sm",mb:5,mt:"md",children:"preventGrowOverflow: false – children will grow based on their content, they can take more than 33% of parent width"}),(0,r.jsxs)(d.Z,{grow:!0,preventGrowOverflow:!1,wrap:"nowrap",children:[(0,r.jsx)(c.z,{variant:"default",children:"First button"}),(0,r.jsx)(c.z,{variant:"default",children:"Second button with large content"}),(0,r.jsx)(c.z,{variant:"default",children:"Third button"})]})]})})},code:`
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true \u2013 each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false \u2013 children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
`};var u=n(54078),h=n(15019);let p=(0,u.A)(h.us.Group);function f(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{Demo:n,FlexboxGapSupport:a}=t;return n||x("Demo",!0),a||x("FlexboxGapSupport",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Group"})," is a horizontal flex container. If you need a vertical flex container, use ",(0,r.jsx)(t.a,{href:"/core/stack",children:"Stack"}),"\ncomponent instead. If you need to have full control over flex container properties, use ",(0,r.jsx)(t.a,{href:"/core/flex",children:"Flex"})," component."]}),"\n",(0,r.jsx)(n,{data:i.j}),"\n",(0,r.jsx)(t.h2,{id:"preventgrowoverflow",children:"preventGrowOverflow"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"preventGrowOverflow"})," prop allows you to control how ",(0,r.jsx)(t.code,{children:"Group"})," children should behave when there is not enough\nspace to fit them all on one line. By default, children are not allowed to take more space than\n",(0,r.jsx)(t.code,{children:"(1 / children.length) * 100%"})," of parent width (",(0,r.jsx)(t.code,{children:"preventGrowOverflow"})," is set to ",(0,r.jsx)(t.code,{children:"true"}),"). To change\nthis behavior, set ",(0,r.jsx)(t.code,{children:"preventGrowOverflow"})," to ",(0,r.jsx)(t.code,{children:"false"})," and children will be allowed to grow and take\nas much space as they need."]}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"group-children",children:"Group children"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important"})," ",(0,r.jsx)(t.code,{children:"Group"})," works correctly only with React elements.\nStrings, numbers, fragments may have incorrect styles if ",(0,r.jsx)(t.code,{children:"grow"})," prop is set:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// Invalid Group usage, do not do this\nimport { Group } from '@mantine/core';\n\nfunction InvalidDemo() {\n  return (\n    <Group grow>\n      First string\n      <>\n        <div>element inside fragment</div>\n        <div>another inside fragment</div>\n      </>\n      {20}\n    </Group>\n  );\n}\n"})}),"\n",(0,r.jsx)(a,{component:"Group"})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(p,{...e,children:(0,r.jsx)(f,{...e})})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},88122:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});var r=n(52322),o=n(93010),i=n(39629);let a={type:"configurator",component:function(e){return(0,r.jsxs)(o.Z,{...e,children:[(0,r.jsx)(i.z,{variant:"default",children:"First"}),(0,r.jsx)(i.z,{variant:"default",children:"Second"}),(0,r.jsx)(i.z,{variant:"default",children:"Third"})]})},code:`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=27201)}),_N_E=e.O()}]);
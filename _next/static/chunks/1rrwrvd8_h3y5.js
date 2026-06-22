(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},989463,e=>{"use strict";var t=e.i(648863),n=e.i(485108),r=e.i(725695),o=e.i(391398);let i={type:"configurator",component:function(e){return(0,o.jsxs)(r.Group,{...e,children:[(0,o.jsx)(n.Button,{variant:"default",children:"First"}),(0,o.jsx)(n.Button,{variant:"default",children:"Second"}),(0,o.jsx)(n.Button,{variant:"default",children:"Third"})]})},code:`
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
`,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]};var a=e.i(232471),l=e.i(883364);let s={type:"code",component:function(){return(0,o.jsx)(a.Box,{style:{overflow:"hidden"},children:(0,o.jsxs)(a.Box,{maw:500,p:"md",mx:"auto",bg:"var(--mantine-color-blue-light)",children:[(0,o.jsx)(l.Text,{size:"sm",mb:5,children:"preventGrowOverflow: true – each child width is always limited to 33% of parent width (since there are 3 children)"}),(0,o.jsxs)(r.Group,{grow:!0,wrap:"nowrap",children:[(0,o.jsx)(n.Button,{variant:"default",children:"First button"}),(0,o.jsx)(n.Button,{variant:"default",children:"Second button with large content"}),(0,o.jsx)(n.Button,{variant:"default",children:"Third button"})]}),(0,o.jsx)(l.Text,{size:"sm",mb:5,mt:"md",children:"preventGrowOverflow: false – children will grow based on their content, they can take more than 33% of parent width"}),(0,o.jsxs)(r.Group,{grow:!0,preventGrowOverflow:!1,wrap:"nowrap",children:[(0,o.jsx)(n.Button,{variant:"default",children:"First button"}),(0,o.jsx)(n.Button,{variant:"default",children:"Second button with large content"}),(0,o.jsx)(n.Button,{variant:"default",children:"Third button"})]})]})})},code:`
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false – children will grow based on their content, they can take more
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
`};var d=(0,t.__exportAll)({preventGrowOverflow:()=>s,usage:()=>i});e.s(["GroupDemos",0,d],989463)},716146,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(989463);e.i(603441);var o=e.i(62558);e.i(457450);var i=e.i(418026);let a=(0,o.Layout)(i.MDX_DATA.Group);function l(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.useMDXComponents)(),...e.components},{Demo:i,FlexboxGapSupport:a}=o;return i||s("Demo",!0),a||s("FlexboxGapSupport",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Group"})," is a horizontal flex container. If you need a vertical flex container, use the ",(0,t.jsx)(o.a,{href:"/core/stack",children:"Stack"}),"\ncomponent instead. If you need to have full control over flex container properties, use the ",(0,t.jsx)(o.a,{href:"/core/flex",children:"Flex"})," component."]}),"\n",(0,t.jsx)(i,{data:r.GroupDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"preventgrowoverflow",children:"preventGrowOverflow"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"preventGrowOverflow"})," prop allows you to control how ",(0,t.jsx)(o.code,{children:"Group"})," children should behave when there is not enough\nspace to fit them all on one line. By default, children are not allowed to take more space than\n",(0,t.jsx)(o.code,{children:"(1 / children.length) * 100%"})," of parent width (",(0,t.jsx)(o.code,{children:"preventGrowOverflow"})," is set to ",(0,t.jsx)(o.code,{children:"true"}),"). To change\nthis behavior, set ",(0,t.jsx)(o.code,{children:"preventGrowOverflow"})," to ",(0,t.jsx)(o.code,{children:"false"})," and children will be allowed to grow and take\nas much space as they need."]}),"\n",(0,t.jsx)(i,{data:r.GroupDemos.preventGrowOverflow}),"\n",(0,t.jsx)(o.h2,{id:"group-children",children:"Group children"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"!important"})," ",(0,t.jsx)(o.code,{children:"Group"})," works correctly only with React elements.\nStrings, numbers, fragments may have incorrect styles if the ",(0,t.jsx)(o.code,{children:"grow"})," prop is set:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// Invalid Group usage, do not do this\nimport { Group } from '@mantine/core';\n\nfunction InvalidDemo() {\n  return (\n    <Group grow>\n      First string\n      <>\n        <div>element inside fragment</div>\n        <div>another inside fragment</div>\n      </>\n      {20}\n    </Group>\n  );\n}\n"})}),"\n",(0,t.jsx)(a,{component:"Group"})]})}function s(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})})}])},488547,(e,t,n)=>{let r="/core/group";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(716146)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30551],{79606:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/anchor",function(){return r(73006)}])},73006:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(52322),o=r(45392),i=r(71873);let c={type:"code",component:function(){return(0,t.jsx)(i.e,{href:"https://mantine.dev/",target:"_blank",children:"Anchor component"})},code:`
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`};var l=r(93010);let d={type:"code",component:function(){return(0,t.jsxs)(l.Z,{justify:"center",children:[(0,t.jsx)(i.e,{href:"https://mantine.dev/",target:"_blank",underline:"always",children:"Underline always"}),(0,t.jsx)(i.e,{href:"https://mantine.dev/",target:"_blank",underline:"hover",children:"Underline hover"}),(0,t.jsx)(i.e,{href:"https://mantine.dev/",target:"_blank",underline:"never",children:"Underline never"})]})},code:`
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
`},h={type:"code",component:function(){return(0,t.jsx)(i.e,{variant:"gradient",gradient:{from:"pink",to:"yellow"},fw:500,fz:"lg",href:"#text-props",children:"A link with pink to yellow gradient"})},code:`
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow' }}
      fw={500}
      fz="lg"
      href="#text-props"
    >
      A link with pink to yellow gradient
    </Anchor>
  );
}
`,centered:!0};var a=r(54078),s=r(15019);let p=(0,a.A)(s.us.Anchor);function u(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:r,GetElementRef:i,Polymorphic:l}=n;return r||m("Demo",!0),i||m("GetElementRef",!0),l||m("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(n.h2,{id:"underline",children:"Underline"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"underline"})," prop to configure ",(0,t.jsx)(n.code,{children:"text-decoration"})," property. It accepts the following values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"always"})," - link is always underlined"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hover"})," - link is underlined on hover"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"never"})," - link is never underlined"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsxs)(n.p,{children:["You can also configure ",(0,t.jsx)(n.code,{children:"underline"})," prop for all ",(0,t.jsx)(n.code,{children:"Anchor"})," components with ",(0,t.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Anchor, createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Anchor: Anchor.extend({\n      defaultProps: {\n        underline: 'always',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"text-props",children:"Text props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Anchor"})," components supports all ",(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," component props.\nFor example, you can use gradient variant:"]}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(l,{defaultElement:"a",changeToElement:"button",component:"Anchor",withNext:!0}),"\n",(0,t.jsx)(i,{component:"Anchor",refType:"a"})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...e,children:(0,t.jsx)(u,{...e})})}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=79606)}),_N_E=e.O()}]);
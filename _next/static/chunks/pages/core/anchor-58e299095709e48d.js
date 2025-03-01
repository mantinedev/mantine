(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20803],{27689:(e,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/anchor",function(){return r(58002)}])},58002:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>m});var t=r(31085),o=r(71184),i=r(12129);let l={type:"code",component:function(){return(0,t.jsx)(i.M,{href:"https://mantine.dev/",target:"_blank",children:"Anchor component"})},code:`
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`};var c=r(56051);let d={type:"code",component:function(){return(0,t.jsxs)(c.Y,{justify:"center",children:[(0,t.jsx)(i.M,{href:"https://mantine.dev/",target:"_blank",underline:"always",children:"Underline always"}),(0,t.jsx)(i.M,{href:"https://mantine.dev/",target:"_blank",underline:"hover",children:"Underline hover"}),(0,t.jsx)(i.M,{href:"https://mantine.dev/",target:"_blank",underline:"never",children:"Underline never"}),(0,t.jsx)(i.M,{href:"https://mantine.dev/",target:"_blank",underline:"not-hover",children:"Underline not-hover"})]})},code:`
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
      <Anchor href="https://mantine.dev/" target="_blank" underline="not-hover">
        Underline not-hover
      </Anchor>
    </Group>
  );
}
`},h={type:"code",component:function(){return(0,t.jsx)(i.M,{variant:"gradient",gradient:{from:"pink",to:"yellow"},fw:500,fz:"lg",href:"#text-props",children:"A link with pink to yellow gradient"})},code:`
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
`,centered:!0};var a=r(85954),s=r(38215);let p=(0,a.P)(s.XZ.Anchor);function u(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:r,GetElementRef:i,Polymorphic:c}=n;return r||f("Demo",!0),i||f("GetElementRef",!0),c||f("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:l}),"\n",(0,t.jsx)(n.h2,{id:"underline",children:"Underline"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"underline"})," prop to configure ",(0,t.jsx)(n.code,{children:"text-decoration"})," property. It accepts the following values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"always"})," - link is always underlined"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hover"})," - link is underlined on hover"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"never"})," - link is never underlined"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"not-hover"})," - link is underlined when not hovered"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsxs)(n.p,{children:["You can also configure ",(0,t.jsx)(n.code,{children:"underline"})," prop for all ",(0,t.jsx)(n.code,{children:"Anchor"})," components with ",(0,t.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Anchor, createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Anchor: Anchor.extend({\n      defaultProps: {\n        underline: 'always',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"text-props",children:"Text props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Anchor"})," components supports all ",(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," component props.\nFor example, you can use gradient variant:"]}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(c,{defaultElement:"a",changeToElement:"button",component:"Anchor",withNext:!0}),"\n",(0,t.jsx)(i,{component:"Anchor",refType:"a"})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,{...e,children:(0,t.jsx)(u,{...e})})}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(27689)),_N_E=e.O()}]);
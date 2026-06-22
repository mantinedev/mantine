(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let t={};for(var o in e)n(t,o,{get:e[o],enumerable:!0});return r||n(t,Symbol.toStringTag,{value:"Module"}),t}])},228958,e=>{"use strict";var n=e.i(391398),r=e.i(38856),t=e.i(648863),o=e.i(79897);let i={type:"code",component:function(){return(0,n.jsx)(o.Anchor,{href:"https://mantine.dev/",target:"_blank",children:"Anchor component"})},code:`
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`};var c=e.i(725695);let l={type:"code",component:function(){return(0,n.jsxs)(c.Group,{justify:"center",children:[(0,n.jsx)(o.Anchor,{href:"https://mantine.dev/",target:"_blank",underline:"always",children:"Underline always"}),(0,n.jsx)(o.Anchor,{href:"https://mantine.dev/",target:"_blank",underline:"hover",children:"Underline hover"}),(0,n.jsx)(o.Anchor,{href:"https://mantine.dev/",target:"_blank",underline:"never",children:"Underline never"}),(0,n.jsx)(o.Anchor,{href:"https://mantine.dev/",target:"_blank",underline:"not-hover",children:"Underline not-hover"})]})},code:`
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
`},h={type:"code",component:function(){return(0,n.jsx)(o.Anchor,{variant:"gradient",gradient:{from:"pink",to:"yellow"},fw:500,fz:"lg",href:"#text-props",children:"A link with pink to yellow gradient"})},code:`
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
`,centered:!0};var d=(0,t.__exportAll)({decoration:()=>l,textProps:()=>h,usage:()=>i});e.i(603441);var a=e.i(62558);e.i(457450);var s=e.i(418026);let p=(0,a.Layout)(s.MDX_DATA.Anchor);function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:o,GetElementRef:i,Polymorphic:c}=t;return o||m("Demo",!0),i||m("GetElementRef",!0),c||m("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:d.usage}),"\n",(0,n.jsx)(t.h2,{id:"underline",children:"Underline"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"underline"})," prop to configure the ",(0,n.jsx)(t.code,{children:"text-decoration"})," property. It accepts the following values:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"always"})," - link is always underlined"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hover"})," - link is underlined on hover"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"never"})," - link is never underlined"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"not-hover"})," - link is underlined when not hovered"]}),"\n"]}),"\n",(0,n.jsx)(o,{data:d.decoration}),"\n",(0,n.jsxs)(t.p,{children:["You can also configure the ",(0,n.jsx)(t.code,{children:"underline"})," prop for all ",(0,n.jsx)(t.code,{children:"Anchor"})," components with ",(0,n.jsx)(t.a,{href:"/theming/default-props",children:"default props"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Anchor, createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Anchor: Anchor.extend({\n      defaultProps: {\n        underline: 'always',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"text-props",children:"Text props"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Anchor"})," component supports all ",(0,n.jsx)(t.a,{href:"/core/text",children:"Text"})," component props.\nFor example, you can use the gradient variant:"]}),"\n",(0,n.jsx)(o,{data:d.textProps}),"\n",(0,n.jsx)(c,{defaultElement:"a",changeToElement:"button",component:"Anchor",withNext:!0}),"\n",(0,n.jsx)(i,{component:"Anchor",refType:"a"})]})}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,n.jsx)(p,{...e,children:(0,n.jsx)(u,{...e})})}],228958)},381957,(e,n,r)=>{let t="/core/anchor";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(228958)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
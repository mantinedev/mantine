(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85994],{28069:(n,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/polymorphic",function(){return o(62908)}])},62908:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>P});var t=o(31085),r=o(71184),c=o(52022);let p={type:"code",component:function(){return(0,t.jsx)(c.$,{component:"a",href:"https://mantine.dev/",target:"_blank",children:"Mantine website"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`};var i=o(14041);let s=`
import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mantine/core';

interface LinkButtonProps
  extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof ButtonProps> {}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => (
  <Button {...props} ref={ref} component="a" />
));

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}
`,a=(0,i.forwardRef)((n,e)=>(0,t.jsx)(c.$,{...n,ref:e,component:"a"})),l={type:"code",component:function(){return(0,t.jsx)(a,{href:"https://mantine.dev",target:"_blank",children:"Mantine website"})},centered:!0,code:s};var m=o(66205),h=o(56051);let d=`
import { forwardRef } from 'react';
import { createPolymorphicComponent, Button, ButtonProps, Group } from '@mantine/core';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

// Default root element is 'button', but it can be changed with 'component' prop
const CustomButton = createPolymorphicComponent<'button', CustomButtonProps>(
  forwardRef<HTMLButtonElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button {...others} ref={ref}>
      {label}
    </Button>
  ))
);

// Default root element is 'a', but it can be changed with 'component' prop
const CustomButtonAnchor = createPolymorphicComponent<'a', CustomButtonProps>(
  forwardRef<HTMLAnchorElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button component="a" {...others} ref={ref}>
      {label}
    </Button>
  ))
);

function Demo() {
  return (
    <Group>
      <CustomButton label="Button by default" color="cyan" />
      <CustomButtonAnchor label="Anchor by default" href="https://mantine.dev" target="_blank" />
    </Group>
  );
}
`,u=(0,m.K)((0,i.forwardRef)(({label:n,...e},o)=>(0,t.jsx)(c.$,{...e,ref:o,children:n}))),x=(0,m.K)((0,i.forwardRef)(({label:n,...e},o)=>(0,t.jsx)(c.$,{component:"a",...e,ref:o,children:n}))),f={type:"code",component:function(){return(0,t.jsxs)(h.Y,{children:[(0,t.jsx)(u,{label:"Button by default",color:"cyan"}),(0,t.jsx)(x,{label:"Anchor by default",href:"https://mantine.dev",target:"_blank"})]})},centered:!0,code:d};var y=o(34056);let j=`
import { forwardRef } from 'react';
import { Box, BoxProps, createPolymorphicComponent, Group } from '@mantine/core';

interface MyButtonProps extends BoxProps {
  label: string;
}

const MyButton = createPolymorphicComponent<'button', MyButtonProps>(
  forwardRef<HTMLButtonElement, MyButtonProps>(({ label, ...others }, ref) => (
    <Box component="button" {...others} ref={ref}>
      {label}
    </Box>
  ))
);

function Demo() {
  return (
    <Group>
      <MyButton label="Button by default" />
      <MyButton
        label="MyButton as anchor"
        component="a"
        href="https://mantine.dev"
        target="_blank"
      />
    </Group>
  );
}
`,b=(0,m.K)((0,i.forwardRef)(({label:n,...e},o)=>(0,t.jsx)(y.a,{component:"button",...e,ref:o,children:n}))),B={type:"code",component:function(){return(0,t.jsxs)(h.Y,{children:[(0,t.jsx)(b,{label:"Button by default"}),(0,t.jsx)(b,{label:"MyButton as anchor",component:"a",href:"https://mantine.dev",target:"_blank"})]})},centered:!0,code:j};var g=o(85954),k=o(38215);let w=(0,g.P)(k.XZ.Polymorphic);function v(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components},{Demo:o}=e;return o||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"polymorphic-components",children:"Polymorphic components"}),"\n",(0,t.jsx)(e.h2,{id:"what-is-a-polymorphic-component",children:"What is a polymorphic component"}),"\n",(0,t.jsxs)(e.p,{children:["A polymorphic component is a component which root element can be changed with ",(0,t.jsx)(e.code,{children:"component"})," prop.\nAll polymorphic components have a default element which is used when ",(0,t.jsx)(e.code,{children:"component"})," prop is not provided.\nFor example, the ",(0,t.jsx)(e.a,{href:"/core/button",children:"Button"})," component default element is ",(0,t.jsx)(e.code,{children:"button"})," and\nit can be changed to ",(0,t.jsx)(e.code,{children:"a"})," or any other element or component:"]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(e.h2,{id:"renderroot-prop",children:"renderRoot prop"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"renderRoot"})," is an alternative to the ",(0,t.jsx)(e.code,{children:"component"})," prop, which accepts a function that should return\na React element. It is useful in cases when ",(0,t.jsx)(e.code,{children:"component"})," prop cannot be used, for example,\nwhen the component that you want to pass to the ",(0,t.jsx)(e.code,{children:"component"})," is generic\n(accepts type or infers it from props, for example ",(0,t.jsx)(e.code,{children:"<Link<'/'> />"}),")."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"renderRoot"})," prop, the result is the same as in the previous demo:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={(props) => (\n        <a href="https://mantine.dev/" target="_blank" {...props} />\n      )}\n    >\n      Mantine website\n    </Button>\n  );\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"!important"})," It is required to spread ",(0,t.jsx)(e.code,{children:"props"})," argument into the root element. Otherwise\nthere will be no styles and the component might not be accessible."]}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-as-other-react-components",children:"Polymorphic components as other React components"}),"\n",(0,t.jsxs)(e.p,{children:["You can pass any other React component to ",(0,t.jsx)(e.code,{children:"component"})," prop.\nFor example, you can pass ",(0,t.jsx)(e.code,{children:"Link"})," component from ",(0,t.jsx)(e.code,{children:"react-router-dom"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Link } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} to=\"/react-router\">\n      React router link\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-as-nextjs-link",children:"Polymorphic components as Next.js Link"}),"\n",(0,t.jsx)(e.p,{children:"Next.js link does not work in the same way as other similar components in all Next.js versions."}),"\n",(0,t.jsx)(e.p,{children:"With Next.js 12 and below:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"With Next.js 13 and above:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-with-generic-components",children:"Polymorphic components with generic components"}),"\n",(0,t.jsxs)(e.p,{children:["You cannot pass generic components to ",(0,t.jsx)(e.code,{children:"component"})," prop because it is not possible to infer generic types\nfrom the component prop. For example, you cannot pass ",(0,t.jsx)(e.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links",children:"typed Next.js Link"}),"\nto ",(0,t.jsx)(e.code,{children:"component"})," prop because it is not possible to infer ",(0,t.jsx)(e.code,{children:"href"})," type from the component prop. The component itself\nwill work correctly, but you will have a TypeScript error."]}),"\n",(0,t.jsxs)(e.p,{children:["To make generic components work with polymorphic components, use ",(0,t.jsx)(e.code,{children:"renderRoot"})," prop instead of ",(0,t.jsx)(e.code,{children:"component"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button renderRoot={(props) => <Link href=\"/hello\" {...props} />}>\n      Typed Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-with-react-router-navlink",children:"Polymorphic components with react-router NavLink"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://reactrouter.com/en/main",children:"react-router-dom"})," ",(0,t.jsx)(e.a,{href:"https://reactrouter.com/en/main/components/nav-link",children:"NavLink"})," component\n",(0,t.jsx)(e.code,{children:"className"})," prop accepts a function based on which you can add an active class to the link. This feature is\nincompatible with Mantine ",(0,t.jsx)(e.code,{children:"component"})," prop, but you can use ",(0,t.jsx)(e.code,{children:"renderRoot"})," prop instead:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import cx from 'clsx';\nimport { NavLink } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={({ className, ...others }) => (\n        <NavLink\n          className={({ isActive }) =>\n            cx(className, { 'active-class': isActive })\n          }\n          {...others}\n        />\n      )}\n    >\n      React router NavLink\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"wrapping-polymorphic-components",children:"Wrapping polymorphic components"}),"\n",(0,t.jsxs)(e.p,{children:["Non-polymorphic components include ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type,\nwhere ",(0,t.jsx)(e.code,{children:"x"})," is a root element of the component. For example, ",(0,t.jsx)(e.a,{href:"/core/container",children:"Container"})," component\nis not polymorphic – its root element is always ",(0,t.jsx)(e.code,{children:"div"}),", so its props type includes ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'div'>"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Polymorphic components do not include ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type\nbecause their root element can be changed, and thus props type can be inferred only after the component was rendered."]}),"\n",(0,t.jsx)(e.p,{children:"Example of creating a non-polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:l}),"\n",(0,t.jsx)(e.p,{children:"Example of creating a polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(e.h2,{id:"dynamic-component-prop",children:"Dynamic component prop"}),"\n",(0,t.jsxs)(e.p,{children:["You can use dynamic value in the ",(0,t.jsx)(e.code,{children:"component"})," prop, but in this case, you need to either provide types manually\nor disable type checking by passing ",(0,t.jsx)(e.code,{children:"any"})," as a type argument to the polymorphic component:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction KeepTypes() {\n  return (\n    <Box<'input'>\n      component={(Math.random() > 0.5 ? 'input' : 'div') as any}\n    />\n  );\n}\n\nfunction NukeTypes() {\n  return (\n    <Box<any> component={Math.random() > 0.5 ? 'input' : 'div'} />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"create-your-own-polymorphic-components",children:"Create your own polymorphic components"}),"\n",(0,t.jsxs)(e.p,{children:["Use ",(0,t.jsx)(e.code,{children:"createPolymorphicComponent"})," function and ",(0,t.jsx)(e.a,{href:"/core/box",children:"Box"})," component to create new polymorphic components:"]}),"\n",(0,t.jsx)(o,{data:B}),"\n",(0,t.jsx)(e.h2,{id:"make-mantine-component-polymorphic",children:"Make Mantine component polymorphic"}),"\n",(0,t.jsxs)(e.p,{children:["Polymorphic components have performance overhead for tsserver (no impact on runtime performance),\nbecause of that not all Mantine components have polymorphic types, but all components still\naccept ",(0,t.jsx)(e.code,{children:"component"})," prop – root element can be changed."]}),"\n",(0,t.jsxs)(e.p,{children:["To make Mantine component polymorphic, use ",(0,t.jsx)(e.code,{children:"createPolymorphicComponent"})," function the same way\nas in the previous example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import {\n  createPolymorphicComponent,\n  Group,\n  GroupProps,\n} from '@mantine/core';\n\nconst PolymorphicGroup = createPolymorphicComponent<\n  'button',\n  GroupProps\n>(Group);\n\nfunction Demo() {\n  return (\n    <PolymorphicGroup component=\"a\" href=\"https://mantine.dev\" />\n  );\n}\n"})})]})}function P(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(w,{...n,children:(0,t.jsx)(v,{...n})})}}},n=>{var e=e=>n(n.s=e);n.O(0,[67456,39699,68831,90636,46593,38792],()=>e(28069)),_N_E=n.O()}]);
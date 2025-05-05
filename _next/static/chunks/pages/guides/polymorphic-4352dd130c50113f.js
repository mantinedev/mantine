(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85994],{28069:(n,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/polymorphic",function(){return o(62908)}])},62908:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>M});var t=o(31085),r=o(71184),c=o(52022);let p={type:"code",component:function(){return(0,t.jsx)(c.$,{component:"a",href:"https://mantine.dev/",target:"_blank",children:"Mantine website"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`};var s=o(14041);let a=`
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
`,i=(0,s.forwardRef)((n,e)=>(0,t.jsx)(c.$,{...n,ref:e,component:"a"})),l={type:"code",component:function(){return(0,t.jsx)(i,{href:"https://mantine.dev",target:"_blank",children:"Mantine website"})},centered:!0,code:a};var h=o(66205),d=o(56051);let m=`
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
`,u=(0,h.K)((0,s.forwardRef)(({label:n,...e},o)=>(0,t.jsx)(c.$,{...e,ref:o,children:n}))),x=(0,h.K)((0,s.forwardRef)(({label:n,...e},o)=>(0,t.jsx)(c.$,{component:"a",...e,ref:o,children:n}))),f={type:"code",component:function(){return(0,t.jsxs)(d.Y,{children:[(0,t.jsx)(u,{label:"Button by default",color:"cyan"}),(0,t.jsx)(x,{label:"Anchor by default",href:"https://mantine.dev",target:"_blank"})]})},centered:!0,code:m};var y=o(34056);let j=`
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
`,v=(0,h.K)((0,s.forwardRef)(({label:n,...e},o)=>(0,t.jsx)(y.a,{component:"button",...e,ref:o,children:n}))),g={type:"code",component:function(){return(0,t.jsxs)(d.Y,{children:[(0,t.jsx)(v,{label:"Button by default"}),(0,t.jsx)(v,{label:"MyButton as anchor",component:"a",href:"https://mantine.dev",target:"_blank"})]})},centered:!0,code:j};var k=o(18675),b=o(20017);let B=(0,k.P)(b.XZ.Polymorphic);function w(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components},{Demo:o}=e;return o||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"polymorphic-components",children:"Polymorphic components"}),"\n",(0,t.jsx)(e.h2,{id:"what-is-a-polymorphic-component",children:"What is a polymorphic component"}),"\n",(0,t.jsxs)(e.p,{children:["A polymorphic component is a component which root element can be changed with ",(0,t.jsx)(e.code,{children:"component"})," prop.\nAll polymorphic components have a default element which is used when ",(0,t.jsx)(e.code,{children:"component"})," prop is not provided.\nFor example, the ",(0,t.jsx)(e.a,{href:"/core/button",children:"Button"})," component default element is ",(0,t.jsx)(e.code,{children:"button"})," and\nit can be changed to ",(0,t.jsx)(e.code,{children:"a"})," or any other element or component:"]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(e.h2,{id:"renderroot-prop",children:"renderRoot prop"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"renderRoot"})," is an alternative to the ",(0,t.jsx)(e.code,{children:"component"})," prop, which accepts a function that should return\na React element. It is useful in cases when ",(0,t.jsx)(e.code,{children:"component"})," prop cannot be used, for example,\nwhen the component that you want to pass to the ",(0,t.jsx)(e.code,{children:"component"})," is generic\n(accepts type or infers it from props, for example ",(0,t.jsx)(e.code,{children:"<Link<'/'> />"}),")."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"renderRoot"})," prop, the result is the same as in the previous demo:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={(props) => (\n        <a href="https://mantine.dev/" target="_blank" {...props} />\n      )}\n    >\n      Mantine website\n    </Button>\n  );\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"!important"})," It is required to spread ",(0,t.jsx)(e.code,{children:"props"})," argument into the root element. Otherwise\nthere will be no styles and the component might not be accessible."]}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-as-other-react-components",children:"Polymorphic components as other React components"}),"\n",(0,t.jsxs)(e.p,{children:["You can pass any other React component to ",(0,t.jsx)(e.code,{children:"component"})," prop.\nFor example, you can pass ",(0,t.jsx)(e.code,{children:"Link"})," component from ",(0,t.jsx)(e.code,{children:"react-router-dom"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Link } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} to=\"/react-router\">\n      React router link\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-as-nextjs-link",children:"Polymorphic components as Next.js Link"}),"\n",(0,t.jsx)(e.p,{children:"Next.js link does not work in the same way as other similar components in all Next.js versions."}),"\n",(0,t.jsx)(e.p,{children:"With Next.js 12 and below:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"With Next.js 13 and above:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-with-generic-components",children:"Polymorphic components with generic components"}),"\n",(0,t.jsxs)(e.p,{children:["You cannot pass generic components to ",(0,t.jsx)(e.code,{children:"component"})," prop because it is not possible to infer generic types\nfrom the component prop. For example, you cannot pass ",(0,t.jsx)(e.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links",children:"typed Next.js Link"}),"\nto ",(0,t.jsx)(e.code,{children:"component"})," prop because it is not possible to infer ",(0,t.jsx)(e.code,{children:"href"})," type from the component prop. The component itself\nwill work correctly, but you will have a TypeScript error."]}),"\n",(0,t.jsxs)(e.p,{children:["To make generic components work with polymorphic components, use ",(0,t.jsx)(e.code,{children:"renderRoot"})," prop instead of ",(0,t.jsx)(e.code,{children:"component"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button renderRoot={(props) => <Link href=\"/hello\" {...props} />}>\n      Typed Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-with-react-router-navlink",children:"Polymorphic components with react-router NavLink"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://reactrouter.com/en/main",children:"react-router-dom"})," ",(0,t.jsx)(e.a,{href:"https://reactrouter.com/en/main/components/nav-link",children:"NavLink"})," component\n",(0,t.jsx)(e.code,{children:"className"})," prop accepts a function based on which you can add an active class to the link. This feature is\nincompatible with Mantine ",(0,t.jsx)(e.code,{children:"component"})," prop, but you can use ",(0,t.jsx)(e.code,{children:"renderRoot"})," prop instead:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import cx from 'clsx';\nimport { NavLink } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={({ className, ...others }) => (\n        <NavLink\n          className={({ isActive }) =>\n            cx(className, { 'active-class': isActive })\n          }\n          {...others}\n        />\n      )}\n    >\n      React router NavLink\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"wrapping-polymorphic-components",children:"Wrapping polymorphic components"}),"\n",(0,t.jsxs)(e.p,{children:["Non-polymorphic components include ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type,\nwhere ",(0,t.jsx)(e.code,{children:"x"})," is a root element of the component. For example, ",(0,t.jsx)(e.a,{href:"/core/container",children:"Container"})," component\nis not polymorphic – its root element is always ",(0,t.jsx)(e.code,{children:"div"}),", so its props type includes ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'div'>"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Polymorphic components do not include ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type\nbecause their root element can be changed, and thus props type can be inferred only after the component was rendered."]}),"\n",(0,t.jsx)(e.p,{children:"Example of creating a non-polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:l}),"\n",(0,t.jsx)(e.p,{children:"Example of creating a polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(e.h2,{id:"dynamic-component-prop",children:"Dynamic component prop"}),"\n",(0,t.jsxs)(e.p,{children:["You can use dynamic value in the ",(0,t.jsx)(e.code,{children:"component"})," prop, but in this case, you need to either provide types manually\nor disable type checking by passing ",(0,t.jsx)(e.code,{children:"any"})," as a type argument to the polymorphic component:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction KeepTypes() {\n  return (\n    <Box<'input'>\n      component={(Math.random() > 0.5 ? 'input' : 'div') as any}\n    />\n  );\n}\n\nfunction NukeTypes() {\n  return (\n    <Box<any> component={Math.random() > 0.5 ? 'input' : 'div'} />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"create-your-own-polymorphic-components",children:"Create your own polymorphic components"}),"\n",(0,t.jsxs)(e.p,{children:["Use ",(0,t.jsx)(e.code,{children:"createPolymorphicComponent"})," function and ",(0,t.jsx)(e.a,{href:"/core/box",children:"Box"})," component to create new polymorphic components:"]}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsx)(e.h2,{id:"make-mantine-component-polymorphic",children:"Make Mantine component polymorphic"}),"\n",(0,t.jsxs)(e.p,{children:["Polymorphic components have performance overhead for tsserver (no impact on runtime performance),\nbecause of that not all Mantine components have polymorphic types, but all components still\naccept ",(0,t.jsx)(e.code,{children:"component"})," prop – root element can be changed."]}),"\n",(0,t.jsxs)(e.p,{children:["To make Mantine component polymorphic, use ",(0,t.jsx)(e.code,{children:"createPolymorphicComponent"})," function the same way\nas in the previous example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import {\n  createPolymorphicComponent,\n  Group,\n  GroupProps,\n} from '@mantine/core';\n\nconst PolymorphicGroup = createPolymorphicComponent<\n  'button',\n  GroupProps\n>(Group);\n\nfunction Demo() {\n  return (\n    <PolymorphicGroup component=\"a\" href=\"https://mantine.dev\" />\n  );\n}\n"})})]})}function M(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(B,{...n,children:(0,t.jsx)(w,{...n})})}},87186:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(n,e,o)=>{"use strict";o.d(e,{A:()=>t});var t=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},n=>{var e=e=>n(n.s=e);n.O(0,[18675,90636,46593,38792],()=>e(28069)),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8442],{33507:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});var t=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},77733:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/polymorphic",function(){return o(95248)}])},95248:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return en}});var t=o(85893),r=o(11151),c=o(19905),p=o(9904),a=o(67294),i=o(14469);let s=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`,l={type:"code",component:function(){return a.createElement(i.z,{component:"a",href:"https://mantine.dev/",target:"_blank"},"Mantine website")},centered:!0,code:s};var m=Object.defineProperty,h=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,x=(e,n,o)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,j=(e,n)=>{for(var o in n||(n={}))f.call(n,o)&&x(e,o,n[o]);if(u)for(var o of u(n))y.call(n,o)&&x(e,o,n[o]);return e},b=(e,n)=>h(e,d(n));let v=`
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
`,g=(0,a.forwardRef)((e,n)=>a.createElement(i.z,b(j({},e),{ref:n,component:"a"}))),k={type:"code",component:function(){return a.createElement(g,{href:"https://mantine.dev",target:"_blank"},"Mantine website")},centered:!0,code:v};var w=o(31233),B=o(16262),P=Object.defineProperty,M=Object.defineProperties,O=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,E=(e,n,o)=>n in e?P(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,C=(e,n)=>{for(var o in n||(n={}))R.call(n,o)&&E(e,o,n[o]);if(N)for(var o of N(n))L.call(n,o)&&E(e,o,n[o]);return e},_=(e,n)=>M(e,O(n)),D=(e,n)=>{var o={};for(var t in e)R.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&N)for(var t of N(e))0>n.indexOf(t)&&L.call(e,t)&&(o[t]=e[t]);return o};let Z=`
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
`,T=(0,w.F)((0,a.forwardRef)((e,n)=>{var{label:o}=e,t=D(e,["label"]);return a.createElement(i.z,_(C({},t),{ref:n}),o)})),A=(0,w.F)((0,a.forwardRef)((e,n)=>{var{label:o}=e,t=D(e,["label"]);return a.createElement(i.z,_(C({component:"a"},t),{ref:n}),o)})),G={type:"code",component:function(){return a.createElement(B.Z,null,a.createElement(T,{label:"Button by default",color:"cyan"}),a.createElement(A,{label:"Anchor by default",href:"https://mantine.dev",target:"_blank"}))},centered:!0,code:Z};var I=o(81110),F=Object.defineProperty,W=Object.defineProperties,z=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,X=(e,n,o)=>n in e?F(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,q=(e,n)=>{for(var o in n||(n={}))S.call(n,o)&&X(e,o,n[o]);if(H)for(var o of H(n))Y.call(n,o)&&X(e,o,n[o]);return e},K=(e,n)=>W(e,z(n)),U=(e,n)=>{var o={};for(var t in e)S.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&H)for(var t of H(e))0>n.indexOf(t)&&Y.call(e,t)&&(o[t]=e[t]);return o};let J=`
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
`,Q=(0,w.F)((0,a.forwardRef)((e,n)=>{var{label:o}=e,t=U(e,["label"]);return a.createElement(I.x,K(q({component:"button"},t),{ref:n}),o)})),V={type:"code",component:function(){return a.createElement(B.Z,null,a.createElement(Q,{label:"Button by default"}),a.createElement(Q,{label:"MyButton as anchor",component:"a",href:"https://mantine.dev",target:"_blank"}))},centered:!0,code:J},$=(0,c.A)(p.us.Polymorphic);function ee(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",strong:"strong"},(0,r.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"polymorphic-components",children:"Polymorphic components"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-polymorphic-component",children:"What is a polymorphic component"}),"\n",(0,t.jsxs)(n.p,{children:["A polymorphic component is a component which root element can be changed with ",(0,t.jsx)(n.code,{children:"component"})," prop.\nAll polymorphic components have a default element which is used when ",(0,t.jsx)(n.code,{children:"component"})," prop is not provided.\nFor example, the ",(0,t.jsx)(n.a,{href:"/core/button",children:"Button"})," component default element is ",(0,t.jsx)(n.code,{children:"button"})," and\nit can be changed to ",(0,t.jsx)(n.code,{children:"a"})," or any other element or component:"]}),"\n",(0,t.jsx)(o,{data:l}),"\n",(0,t.jsx)(n.h2,{id:"renderroot-prop",children:"renderRoot prop"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderRoot"})," is an alternative to the ",(0,t.jsx)(n.code,{children:"component"})," prop, which accepts a function that should return\na React element. It is useful in cases when ",(0,t.jsx)(n.code,{children:"component"})," prop cannot be used, for example,\nwhen the component that you want to pass to the ",(0,t.jsx)(n.code,{children:"component"})," is generic\n(accepts type or infers it from props, for example ",(0,t.jsx)(n.code,{children:"<Link<'/'> />"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Example of using ",(0,t.jsx)(n.code,{children:"renderRoot"})," prop, the result is the same as in the previous demo:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button renderRoot={(props) => <a href="https://mantine.dev/" target="_blank" {...props} />}>\n      Mantine website\n    </Button>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"!important"})," It is required to spread ",(0,t.jsx)(n.code,{children:"props"})," argument into the root element. Otherwise\nthere will be no styles and the component might not be accessible."]}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-components-as-other-react-components",children:"Polymorphic components as other React components"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass any other React component to ",(0,t.jsx)(n.code,{children:"component"})," prop.\nFor example, you can pass ",(0,t.jsx)(n.code,{children:"Link"})," component from ",(0,t.jsx)(n.code,{children:"react-router-dom"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Link } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} to=\"/react-router\">\n      React router link\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-components-as-nextjs-link",children:"Polymorphic components as Next.js Link"}),"\n",(0,t.jsx)(n.p,{children:"Next.js link does not work in the same way as other similar components in all Next.js versions."}),"\n",(0,t.jsx)(n.p,{children:"With Next.js 12 and below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"With Next.js 13 and above:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-components-with-generic-components",children:"Polymorphic components with generic components"}),"\n",(0,t.jsxs)(n.p,{children:["You cannot pass generic components to ",(0,t.jsx)(n.code,{children:"component"})," prop because it is not possible to infer generic types\nfrom the component prop. For example, you cannot pass ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links",children:"typed Next.js Link"}),"\nto ",(0,t.jsx)(n.code,{children:"component"})," prop because it is not possible to infer ",(0,t.jsx)(n.code,{children:"href"})," type from the component prop. The component itself\nwill work correctly, but you will have a TypeScript error."]}),"\n",(0,t.jsxs)(n.p,{children:["To make generic components work with polymorphic components, use ",(0,t.jsx)(n.code,{children:"renderRoot"})," prop instead of ",(0,t.jsx)(n.code,{children:"component"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button renderRoot={(props) => <Link href=\"/hello\" {...props} />}>\n      Typed Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-components-with-react-router-navlink",children:"Polymorphic components with react-router NavLink"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main",children:"react-router-dom"})," ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/nav-link",children:"NavLink"})," component\n",(0,t.jsx)(n.code,{children:"className"})," prop accepts a function based on which you can add an active class to the link. This feature is\nincompatible with Mantine ",(0,t.jsx)(n.code,{children:"component"})," prop, but you can use ",(0,t.jsx)(n.code,{children:"renderRoot"})," prop instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import cx from 'clsx';\nimport { Button } from '@mantine/core';\nimport { NavLink } from 'react-router-dom';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={({ className, ...others }) => (\n        <NavLink\n          className={({ isActive }) => cx(className, { 'active-class': isActive })}\n          {...others}\n        />\n      )}\n    >\n      React router NavLink\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wrapping-polymorphic-components",children:"Wrapping polymorphic components"}),"\n",(0,t.jsxs)(n.p,{children:["Non-polymorphic components include ",(0,t.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type,\nwhere ",(0,t.jsx)(n.code,{children:"x"})," is a root element of the component. For example, ",(0,t.jsx)(n.a,{href:"/core/container",children:"Container"})," component\nis not polymorphic – its root element is always ",(0,t.jsx)(n.code,{children:"div"}),", so its props type includes ",(0,t.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'div'>"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Polymorphic components do not include ",(0,t.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type\nbecause their root element can be changed, and thus props type can be inferred only after the component was rendered."]}),"\n",(0,t.jsx)(n.p,{children:"Example of creating a non-polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsx)(n.p,{children:"Example of creating a polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:G}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-component-prop",children:"Dynamic component prop"}),"\n",(0,t.jsxs)(n.p,{children:["You can use dynamic value in the ",(0,t.jsx)(n.code,{children:"component"})," prop, but in this case, you need to either provide types manually\nor disable type checking by passing ",(0,t.jsx)(n.code,{children:"any"})," as a type argument to the polymorphic component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction KeepTypes() {\n  return <Box<'input'> component={(Math.random() > 0.5 ? 'input' : 'div') as any} />;\n}\n\nfunction NukeTypes() {\n  return <Box<any> component={Math.random() > 0.5 ? 'input' : 'div'} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-your-own-polymorphic-components",children:"Create your own polymorphic components"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"createPolymorphicComponent"})," function and ",(0,t.jsx)(n.a,{href:"/core/box",children:"Box"})," component to create new polymorphic components:"]}),"\n",(0,t.jsx)(o,{data:V}),"\n",(0,t.jsx)(n.h2,{id:"make-mantine-component-polymorphic",children:"Make Mantine component polymorphic"}),"\n",(0,t.jsxs)(n.p,{children:["Polymorphic components have performance overhead for tsserver (no impact on runtime performance),\nbecause of that not all Mantine components have polymorphic types, but all components still\naccept ",(0,t.jsx)(n.code,{children:"component"})," prop – root element can be changed."]}),"\n",(0,t.jsxs)(n.p,{children:["To make Mantine component polymorphic, use ",(0,t.jsx)(n.code,{children:"createPolymorphicComponent"})," function the same way\nas in the previous example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Group, GroupProps, createPolymorphicComponent } from '@mantine/core';\n\nconst PolymorphicGroup = createPolymorphicComponent<'button', GroupProps>(Group);\n\nfunction Demo() {\n  return <PolymorphicGroup component=\"a\" href=\"https://mantine.dev\" />;\n}\n"})})]})}var en=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)($,Object.assign({},e,{children:(0,t.jsx)(ee,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=77733)}),_N_E=e.O()}]);
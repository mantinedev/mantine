(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33347],{61485:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/rtl",function(){return i(30226)}])},30226:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return f}});var t=i(52322),o=i(45392),r=i(2784),c=i(40991),s=i(47608),d=i(89027),l=i(15981);let a={type:"code",component:function(){let{toggleDirection:e,dir:n,setDirection:i}=(0,d.gm)();return(0,r.useEffect)(()=>()=>i("ltr"),[]),(0,t.jsx)(l.A,{onClick:()=>e(),variant:"default",radius:"md",size:"lg",children:"rtl"===n?(0,t.jsx)(c.Z,{stroke:1.5}):(0,t.jsx)(s.Z,{stroke:1.5})})},centered:!0,code:`
import { ActionIcon, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
`},u={type:"code",component:function(){return(0,t.jsx)("div",{className:"m_7bd29d5a",children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var h=i(25071),p=i(15019);let m=(0,h.A)(p.us.Rtl);function x(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"right-to-left-direction",children:"Right-to-left direction"}),"\n",(0,t.jsxs)(n.p,{children:["All Mantine components support right-to-left direction out of the box.\nYou can preview how components work with RTL direction by clicking direction control\nin the top right corner or pressing ",(0,t.jsx)(n.code,{children:"Ctrl + Shift + L"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"directionprovider",children:"DirectionProvider"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DirectionProvider"})," component is used to set direction for all components inside it.\nIt is required to wrap your application with ",(0,t.jsx)(n.code,{children:"DirectionProvider"})," if you are planning to\neither use RTL direction or change direction dynamically."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DirectionProvider"})," supports the following props:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"export interface DirectionProviderProps {\n  /** Your application */\n  children: React.ReactNode;\n\n  /** Direction set as a default value, `ltr` by default */\n  initialDirection?: 'rtl' | 'ltr';\n\n  /** Determines whether direction should be updated on mount based on `dir` attribute set on root element (usually html element), `true` by default  */\n  detectDirection?: boolean;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Setup ",(0,t.jsx)(n.code,{children:"DirectionProvider"})," in your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { DirectionProvider, MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <DirectionProvider>\n      <MantineProvider>{/* Your app here */}</MantineProvider>\n    </DirectionProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dir-attribute",children:"dir attribute"}),"\n",(0,t.jsxs)(n.p,{children:["It is required to set ",(0,t.jsx)(n.code,{children:"dir"})," attribute on the root element of your application, usually it is ",(0,t.jsx)(n.code,{children:"html"})," element.\n",(0,t.jsx)(n.code,{children:"DirectionProvider"})," will use its value to set direction on mount if ",(0,t.jsx)(n.code,{children:"detectDirection"})," prop is set to ",(0,t.jsx)(n.code,{children:"true"}),".\nNote that this guide does not cover setting ",(0,t.jsx)(n.code,{children:"dir"})," attribute for different frameworks – follow your framework\ndocumentation to learn how to do it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<!-- Set direction attribute on html element -->\n<html dir="rtl">\n  <head></head>\n  <body></body>\n</html>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usedirection-hook",children:"useDirection hook"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useDirection"})," returns an object with the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dir"})," – current direction"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setDirection"})," – function to set direction"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toggleDirection"})," – function to change direction to the opposite value"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can use it to create direction control in your application:"}),"\n",(0,t.jsx)(i,{data:a}),"\n",(0,t.jsx)(n.h2,{id:"rtl-mixin",children:"rtl mixin"}),"\n",(0,t.jsxs)(n.p,{children:["If you have ",(0,t.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," installed then you can use ",(0,t.jsx)(n.code,{children:"rtl"})," mixin in ",(0,t.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,t.jsx)(i,{data:u})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(x,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=61485)}),_N_E=e.O()}]);
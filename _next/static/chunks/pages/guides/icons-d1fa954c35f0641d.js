(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71460],{31289:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/icons",function(){return o(51518)}])},51518:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>x});var s=o(31085),i=o(71184),t=o(14661);let r={type:"code",component:function(){return(0,s.jsx)(t.A,{size:80,stroke:1.5,color:"var(--mantine-color-blue-filled)"})},centered:!0,code:`
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      size={80}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`};var c=o(52022);function d({size:e,style:n,...o}){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",style:{width:e,height:e,...n},...o,children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,s.jsx)("path",{d:"M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6"}),(0,s.jsx)("path",{d:"M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3"})]})}let h={type:"code",component:function(){return(0,s.jsx)(c.$,{leftSection:(0,s.jsx)(d,{size:18}),children:"Demo"})},centered:!0,code:[{fileName:"AddressBookIcon.tsx",code:`
interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}
`,language:"tsx"},{fileName:"Demo.tsx",code:`
import { Button } from '@mantine/core';
import { AddressBookIcon } from './AddressBookIcon';

function Demo() {
  return <Button leftSection={<AddressBookIcon size={18} />}>Demo</Button>;
}
`,language:"tsx"}]};var l=o(85954),a=o(38215);let u=(0,l.P)(a.XZ.Icons);function p(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"icons-libraries-with-mantine",children:"Icons libraries with Mantine"}),"\n",(0,s.jsx)(n.p,{children:"You can use any icons library with Mantine components, most popular options are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://feathericons.com/",children:"Feather icons"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://icons.radix-ui.com/",children:"Radix icons"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://react-icons.github.io/react-icons/",children:"react-icons"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fontawesome.com/v5/docs/web/use-with/react",children:"Font Awesome"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tabler-icons",children:"Tabler icons"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"})," are used in Mantine demos, documentation\nand some ",(0,s.jsx)(n.code,{children:"@mantine/"})," packages depend on them. If you do not know which icons library\nto use, we recommend ",(0,s.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"icons-size",children:"Icons size"}),"\n",(0,s.jsxs)(n.p,{children:["Most of the icons libraries support ",(0,s.jsx)(n.code,{children:"size"})," prop (or similar ",(0,s.jsx)(n.code,{children:"width"})," and ",(0,s.jsx)(n.code,{children:"height"})," props) which allows changing\nicon width and height. Usually, it is a number in pixels."]}),"\n",(0,s.jsx)(o,{data:r}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"rem units in size prop"})}),"\n",(0,s.jsxs)(n.p,{children:["Icons ",(0,s.jsx)(n.code,{children:"size"})," prop is usually converted to ",(0,s.jsx)(n.code,{children:"width"})," and ",(0,s.jsx)(n.code,{children:"height"})," props under the hood.\nIf you set ",(0,s.jsx)(n.code,{children:"size={16}"})," it will be converted to ",(0,s.jsx)(n.code,{children:'width="16"'})," and ",(0,s.jsx)(n.code,{children:'height="16"'})," attributes\non svg element."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use rem units in ",(0,s.jsx)(n.code,{children:"size"})," prop: ",(0,s.jsx)(n.code,{children:'size="1rem"'})," will be converted to ",(0,s.jsx)(n.code,{children:'width="1rem"'})," and ",(0,s.jsx)(n.code,{children:'height="1rem"'}),",\nbut it is not recommended as it is prohibited by SVG standard – some browsers (Firefox) will show a warning in the console."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-icons",children:"Custom icons"}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to use icons as React components. In this case, you will be able to use\n",(0,s.jsx)(n.code,{children:"currentColor"})," in the ",(0,s.jsx)(n.code,{children:"fill"})," and ",(0,s.jsx)(n.code,{children:"stroke"})," prop. This will change icon color based on the context\nit is used in."]}),"\n",(0,s.jsx)(o,{data:h})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(u,{...e,children:(0,s.jsx)(p,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(31289)),_N_E=e.O()}]);
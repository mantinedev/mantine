(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let t={};for(var r in e)n(t,r,{get:e[r],enumerable:!0});return o||n(t,Symbol.toStringTag,{value:"Module"}),t}])},956826,e=>{"use strict";var n=e.i(648863),o=e.i(485108),t=e.i(391398);let r={type:"code",component:function(){return(0,t.jsx)(o.Button,{component:"a",href:"https://mantine.dev/",target:"_blank",children:"Mantine website"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`};var c=e.i(725695),i=e.i(642291);let s=`
import { polymorphic, Button, ButtonProps, Group } from '@mantine/core';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

// Default root element is 'button', but it can be changed with 'component' prop
const CustomButton = polymorphic<'button', CustomButtonProps>(
  ({ label, ...others }: CustomButtonProps) => <Button {...others}>{label}</Button>
);

// Default root element is 'a', but it can be changed with 'component' prop
const CustomButtonAnchor = polymorphic<'a', CustomButtonProps>(
  ({ label, ...others }: CustomButtonProps) => (
    <Button component="a" {...others}>
      {label}
    </Button>
  )
);

function Demo() {
  return (
    <Group>
      <CustomButton label="Button by default" color="cyan" />
      <CustomButtonAnchor label="Anchor by default" href="https://mantine.dev" target="_blank" />
    </Group>
  );
}
`,a=(0,i.polymorphic)(({label:e,...n})=>(0,t.jsx)(o.Button,{...n,children:e})),p=(0,i.polymorphic)(({label:e,...n})=>(0,t.jsx)(o.Button,{component:"a",...n,children:e})),l={type:"code",component:function(){return(0,t.jsxs)(c.Group,{children:[(0,t.jsx)(a,{label:"Button by default",color:"cyan"}),(0,t.jsx)(p,{label:"Anchor by default",href:"https://mantine.dev",target:"_blank"})]})},centered:!0,code:s},m=e=>(0,t.jsx)(o.Button,{...e,component:"a"}),h={type:"code",component:function(){return(0,t.jsx)(m,{href:"https://mantine.dev",target:"_blank",children:"Mantine website"})},centered:!0,code:`
import { Button, ButtonProps, ElementProps } from '@mantine/core';

const LinkButton = (props: ButtonProps & ElementProps<'a', keyof ButtonProps>) => (
  <Button {...props} component="a" />
);

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}
`};var d=e.i(232471);let u=`
import { Box, BoxProps, polymorphic, Group } from '@mantine/core';

interface MyButtonProps extends BoxProps {
  label: string;
}

const MyButton = polymorphic<'button', MyButtonProps>(
  ({ label, ...others }: MyButtonProps) => (
    <Box component="button" {...others}>
      {label}
    </Box>
  )
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
`,x=(0,i.polymorphic)(({label:e,...n})=>(0,t.jsx)(d.Box,{component:"button",...n,children:e})),y={type:"code",component:function(){return(0,t.jsxs)(c.Group,{children:[(0,t.jsx)(x,{label:"Button by default"}),(0,t.jsx)(x,{label:"MyButton as anchor",component:"a",href:"https://mantine.dev",target:"_blank"})]})},centered:!0,code:u},f={type:"configurator",component:e.i(78747).MantineLogo,code:`
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return <MantineLogo{{props}} />;
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"segmented",prop:"type",data:["full","mark"],initialValue:"full",libraryValue:"full"},{prop:"size",type:"number",initialValue:30,libraryValue:30,max:50,min:10,step:5}]};var j=e.i(191788),b=e.i(171481);let g=new Map([["bold",j.createElement(j.Fragment,null,j.createElement("path",{d:"M219.23,159.2a196.66,196.66,0,0,0-18-31.2,196.66,196.66,0,0,0,18-31.2c11.84-26.31,11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66,196.66,0,0,0-31.2,18,196.66,196.66,0,0,0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27,33.29-.43,59.6a196.66,196.66,0,0,0,18,31.2,196.66,196.66,0,0,0-18,31.2c-11.84,26.31-11.69,47.48.43,59.6h0C43.33,224.93,51.78,228,62,228c10,0,21.77-2.92,34.76-8.77a196.66,196.66,0,0,0,31.2-18,196.66,196.66,0,0,0,31.2,18c13,5.85,24.74,8.77,34.76,8.77,10.26,0,18.71-3.07,24.84-9.2h0C230.92,206.68,231.07,185.51,219.23,159.2Zm-17.41-105c5.25,5.26,1.79,26-16,53.78-5.61-6.66-11.65-13.25-18.07-19.67S154.7,75.83,148,70.22C175.82,52.39,196.56,48.93,201.82,54.18ZM171.24,128a288.6,288.6,0,0,1-20.51,22.73A288.6,288.6,0,0,1,128,171.24a288.6,288.6,0,0,1-22.73-20.51A288.6,288.6,0,0,1,84.76,128,298.55,298.55,0,0,1,128,84.76a286.83,286.83,0,0,1,22.73,20.51A286.83,286.83,0,0,1,171.24,128ZM54.18,54.18c1.46-1.45,4.1-2.24,7.75-2.24,9.53,0,25.94,5.39,46,18.28-6.66,5.61-13.25,11.65-19.67,18.07S75.83,101.3,70.22,108C52.39,80.18,48.93,59.44,54.18,54.18Zm0,147.64c-5.25-5.26-1.79-26,16-53.78,5.61,6.66,11.65,13.25,18.07,19.67s13,12.46,19.67,18.07C80.18,203.61,59.44,207.07,54.18,201.82Zm147.64,0c-5.26,5.25-26,1.79-53.78-16,6.66-5.61,13.25-11.65,19.67-18.07s12.46-13,18.07-19.67C203.61,175.82,207.07,196.56,201.82,201.82ZM144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"}))],["duotone",j.createElement(j.Fragment,null,j.createElement("path",{d:"M210.26,210.26c-17.23,17.23-68-5.63-113.46-51.06S28.51,63,45.74,45.74s68,5.63,113.46,51.06S227.49,193,210.26,210.26Z",opacity:"0.2"}),j.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}))],["fill",j.createElement(j.Fragment,null,j.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.47,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A302.47,302.47,0,0,0,141.27,70C172.15,49,196.91,43.81,204.55,51.45Zm-153.1,0c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.19,51.45,204.55ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm76.55,64.56c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55Z"}))],["light",j.createElement(j.Fragment,null,j.createElement("path",{d:"M193.83,128a195.73,195.73,0,0,0,19.9-33.65c10.74-23.88,11-42.66.8-52.88s-29-9.94-52.88.8A195.73,195.73,0,0,0,128,62.17a195.73,195.73,0,0,0-33.65-19.9c-23.88-10.74-42.66-11-52.88-.8s-9.94,29,.8,52.88A195.73,195.73,0,0,0,62.17,128a195.73,195.73,0,0,0-19.9,33.65c-10.74,23.88-11,42.66-.8,52.88h0c5,5,12,7.47,20.63,7.47,9.1,0,20-2.76,32.25-8.27A195.73,195.73,0,0,0,128,193.83a195.73,195.73,0,0,0,33.65,19.9C173.9,219.24,184.8,222,193.9,222c8.64,0,15.65-2.49,20.63-7.47h0c10.23-10.22,9.94-29-.8-52.88A195.73,195.73,0,0,0,193.83,128ZM206,50c9.28,9.28,2.36,36.29-19.8,68a306.2,306.2,0,0,0-22.78-25.45A306.2,306.2,0,0,0,138,69.76C169.75,47.61,196.77,40.68,206,50Zm-27.19,78A289.17,289.17,0,0,1,155,155a289.17,289.17,0,0,1-27,23.88A289.17,289.17,0,0,1,101,155a290.62,290.62,0,0,1-23.88-27A297.06,297.06,0,0,1,128,77.14,290.74,290.74,0,0,1,155,101,289.17,289.17,0,0,1,178.85,128ZM50,50c2.68-2.69,6.84-4,12.17-4,13.11,0,33.3,8,55.87,23.81A302.94,302.94,0,0,0,92.54,92.54,306.2,306.2,0,0,0,69.76,118C47.6,86.25,40.68,59.24,50,50ZM50,206h0c-9.28-9.28-2.35-36.29,19.8-68a306.2,306.2,0,0,0,22.78,25.45A306.2,306.2,0,0,0,118,186.24C86.25,208.4,59.24,215.32,50,206ZM206,206c-9.28,9.28-36.29,2.35-68-19.81a304.26,304.26,0,0,0,25.45-22.77A306.2,306.2,0,0,0,186.24,138C208.4,169.75,215.32,196.76,206,206Zm-68-78a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"}))],["regular",j.createElement(j.Fragment,null,j.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}))],["thin",j.createElement(j.Fragment,null,j.createElement("path",{d:"M211.89,162.47A195.58,195.58,0,0,0,191.36,128a195.58,195.58,0,0,0,20.53-34.47c10.38-23.06,10.81-41,1.21-50.63s-27.57-9.17-50.63,1.21A195.58,195.58,0,0,0,128,64.64,195.58,195.58,0,0,0,93.53,44.11C70.47,33.73,52.49,33.3,42.9,42.9s-9.17,27.57,1.21,50.63A195.58,195.58,0,0,0,64.64,128a195.58,195.58,0,0,0-20.53,34.47c-10.38,23.06-10.81,41-1.21,50.63h0C47.5,217.7,54,220,62.12,220c8.78,0,19.41-2.71,31.41-8.11A195.58,195.58,0,0,0,128,191.36a195.58,195.58,0,0,0,34.47,20.53c12,5.4,22.63,8.11,31.41,8.11,8.09,0,14.62-2.3,19.22-6.9h0C222.7,203.51,222.27,185.53,211.89,162.47ZM207.45,48.55c10.27,10.28,3.14,39.05-21.1,72.84A301,301,0,0,0,162,94a301,301,0,0,0-27.43-24.31C168.4,45.4,197.17,38.27,207.45,48.55Zm-26,79.45a293.16,293.16,0,0,1-25,28.38,291.82,291.82,0,0,1-28.38,25,291.82,291.82,0,0,1-28.38-25,293.16,293.16,0,0,1-25-28.38A302.36,302.36,0,0,1,128,74.58a295.83,295.83,0,0,1,28.37,25A293.16,293.16,0,0,1,181.41,128ZM48.55,48.55c3.05-3,7.71-4.55,13.64-4.55,14.11,0,35.41,8.59,59.19,25.65a304.89,304.89,0,0,0-51.73,51.74C45.41,87.6,38.28,58.83,48.55,48.55Zm0,158.9c-10.27-10.28-3.14-39,21.1-72.84A301,301,0,0,0,94,162a301,301,0,0,0,27.43,24.31C87.6,210.59,58.83,217.72,48.55,207.45Zm158.9,0c-10.28,10.27-39,3.14-72.84-21.1A301,301,0,0,0,162,162a301,301,0,0,0,24.31-27.43C210.59,168.4,217.72,197.17,207.45,207.45ZM136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"}))]]),B=j.forwardRef((e,n)=>j.createElement(b.default,{ref:n,...e,weights:g}));B.displayName="AtomIcon";let k={type:"code",component:function(){return(0,t.jsx)(B,{size:80,color:"var(--mantine-color-blue-filled)"})},centered:!0,code:`
import { AtomIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <AtomIcon
      size={80}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`};function A({size:e,style:n,...o}){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",style:{width:e,height:e,...n},...o,children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,t.jsx)("path",{d:"M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6"}),(0,t.jsx)("path",{d:"M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3"})]})}let v={type:"code",component:function(){return(0,t.jsx)(o.Button,{leftSection:(0,t.jsx)(A,{size:18}),children:"Demo"})},centered:!0,code:[{fileName:"AddressBookIcon.tsx",code:`
interface AddressBookIconProps extends React.ComponentProps<'svg'> {
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
`,language:"tsx"}]};var M=(0,n.__exportAll)({createPolymorphic:()=>l,customIcon:()=>v,icon:()=>k,logo:()=>f,newPolymorphic:()=>y,polymorphic:()=>r,staticPolymorphic:()=>h});e.s(["GuidesDemos",0,M],956826)},820462,e=>{"use strict";var n=e.i(391398),o=e.i(38856),t=e.i(956826);e.i(603441);var r=e.i(62558);e.i(457450);var c=e.i(418026);let i=(0,r.Layout)(c.MDX_DATA.Polymorphic);function s(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.useMDXComponents)(),...e.components},{Demo:c}=r;return c||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"polymorphic-components",children:"Polymorphic components"}),"\n",(0,n.jsx)(r.h2,{id:"what-is-a-polymorphic-component",children:"What is a polymorphic component"}),"\n",(0,n.jsxs)(r.p,{children:["A polymorphic component is a component whose root element can be changed with the ",(0,n.jsx)(r.code,{children:"component"})," prop.\nAll polymorphic components have a default element that's used when the ",(0,n.jsx)(r.code,{children:"component"})," prop is not provided.\nFor example, the ",(0,n.jsx)(r.a,{href:"/core/button",children:"Button"})," component's default element is ",(0,n.jsx)(r.code,{children:"button"})," and\nit can be changed to ",(0,n.jsx)(r.code,{children:"a"})," or any other element or component:"]}),"\n",(0,n.jsx)(c,{data:t.GuidesDemos.polymorphic}),"\n",(0,n.jsx)(r.h2,{id:"renderroot-prop",children:"renderRoot prop"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"renderRoot"})," is an alternative to the ",(0,n.jsx)(r.code,{children:"component"})," prop, which accepts a function that should return\na React element. It is useful in cases when ",(0,n.jsx)(r.code,{children:"component"})," prop cannot be used, for example,\nwhen the component that you want to pass to the ",(0,n.jsx)(r.code,{children:"component"})," is generic\n(accepts type or infers it from props, for example ",(0,n.jsx)(r.code,{children:"<Link<'/'> />"}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["Example of using ",(0,n.jsx)(r.code,{children:"renderRoot"})," prop, the result is the same as in the previous demo:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={(props) => (\n        <a href="https://mantine.dev/" target="_blank" {...props} />\n      )}\n    >\n      Mantine website\n    </Button>\n  );\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"!important"})," It's required to spread the ",(0,n.jsx)(r.code,{children:"props"})," argument into the root element. Otherwise,\nthere will be no styles and the component might not be accessible."]}),"\n",(0,n.jsx)(r.h2,{id:"polymorphic-components-as-other-react-components",children:"Polymorphic components as other React components"}),"\n",(0,n.jsxs)(r.p,{children:["You can pass any other React component to the ",(0,n.jsx)(r.code,{children:"component"})," prop.\nFor example, you can pass the ",(0,n.jsx)(r.code,{children:"Link"})," component from ",(0,n.jsx)(r.code,{children:"react-router-dom"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { Link } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} to=\"/react-router\">\n      React router link\n    </Button>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"polymorphic-components-as-nextjs-link",children:"Polymorphic components as Next.js Link"}),"\n",(0,n.jsx)(r.p,{children:"The Next.js link doesn't work in the same way as other similar components in all Next.js versions."}),"\n",(0,n.jsx)(r.p,{children:"With Next.js 12 and below:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"With Next.js 13 and above:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"polymorphic-components-with-generic-components",children:"Polymorphic components with generic components"}),"\n",(0,n.jsxs)(r.p,{children:["You cannot pass generic components to the ",(0,n.jsx)(r.code,{children:"component"})," prop because it's not possible to infer generic types\nfrom the component prop. For example, you cannot pass ",(0,n.jsx)(r.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links",children:"typed Next.js Link"}),"\nto the ",(0,n.jsx)(r.code,{children:"component"})," prop because it's not possible to infer the ",(0,n.jsx)(r.code,{children:"href"})," type from the component prop. The component itself\nwill work correctly, but you'll have a TypeScript error."]}),"\n",(0,n.jsxs)(r.p,{children:["To make generic components work with polymorphic components, use the ",(0,n.jsx)(r.code,{children:"renderRoot"})," prop instead of ",(0,n.jsx)(r.code,{children:"component"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button renderRoot={(props) => <Link href=\"/hello\" {...props} />}>\n      Typed Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"polymorphic-components-with-react-router-navlink",children:"Polymorphic components with react-router NavLink"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://reactrouter.com/en/main",children:"react-router-dom"})," ",(0,n.jsx)(r.a,{href:"https://reactrouter.com/en/main/components/nav-link",children:"NavLink"})," component's\n",(0,n.jsx)(r.code,{children:"className"})," prop accepts a function based on which you can add an active class to the link. This feature is\nincompatible with Mantine's ",(0,n.jsx)(r.code,{children:"component"})," prop, but you can use the ",(0,n.jsx)(r.code,{children:"renderRoot"})," prop instead:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import cx from 'clsx';\nimport { NavLink } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={({ className, ...others }) => (\n        <NavLink\n          className={({ isActive }) =>\n            cx(className, { 'active-class': isActive })\n          }\n          {...others}\n        />\n      )}\n    >\n      React router NavLink\n    </Button>\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"wrapping-polymorphic-components",children:"Wrapping polymorphic components"}),"\n",(0,n.jsxs)(r.p,{children:["Non-polymorphic components include ",(0,n.jsx)(r.code,{children:"React.ComponentProps<'x'>"})," as part of their props type,\nwhere ",(0,n.jsx)(r.code,{children:"x"})," is the root element of the component. For example, the ",(0,n.jsx)(r.a,{href:"/core/container",children:"Container"})," component\nis not polymorphic – its root element is always ",(0,n.jsx)(r.code,{children:"div"}),", so its props type includes ",(0,n.jsx)(r.code,{children:"React.ComponentProps<'div'>"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Polymorphic components don't include ",(0,n.jsx)(r.code,{children:"React.ComponentProps<'x'>"})," as part of their props type\nbecause their root element can be changed, and thus the props type can be inferred only after the component was rendered."]}),"\n",(0,n.jsx)(r.p,{children:"Example of creating a non-polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,n.jsx)(c,{data:t.GuidesDemos.staticPolymorphic}),"\n",(0,n.jsx)(r.p,{children:"Example of creating a polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,n.jsx)(c,{data:t.GuidesDemos.createPolymorphic}),"\n",(0,n.jsx)(r.h2,{id:"dynamic-component-prop",children:"Dynamic component prop"}),"\n",(0,n.jsxs)(r.p,{children:["You can use a dynamic value in the ",(0,n.jsx)(r.code,{children:"component"})," prop, but in this case, you need to either provide types manually\nor disable type checking by passing ",(0,n.jsx)(r.code,{children:"any"})," as a type argument to the polymorphic component:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction KeepTypes() {\n  return (\n    <Box<'input'>\n      component={(Math.random() > 0.5 ? 'input' : 'div') as any}\n    />\n  );\n}\n\nfunction NukeTypes() {\n  return (\n    <Box<any> component={Math.random() > 0.5 ? 'input' : 'div'} />\n  );\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"create-your-own-polymorphic-components",children:"Create your own polymorphic components"}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.code,{children:"polymorphic"})," function and ",(0,n.jsx)(r.a,{href:"/core/box",children:"Box"})," component to create new polymorphic components:"]}),"\n",(0,n.jsx)(c,{data:t.GuidesDemos.newPolymorphic}),"\n",(0,n.jsx)(r.h2,{id:"make-mantine-component-polymorphic",children:"Make Mantine component polymorphic"}),"\n",(0,n.jsxs)(r.p,{children:["Polymorphic components have a performance overhead for tsserver (no impact on runtime performance),\nbecause of that, not all Mantine components have polymorphic types, but all components still\naccept the ",(0,n.jsx)(r.code,{children:"component"})," prop – the root element can be changed."]}),"\n",(0,n.jsxs)(r.p,{children:["To make a Mantine component polymorphic, use the ",(0,n.jsx)(r.code,{children:"polymorphic"})," function the same way\nas in the previous example:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { polymorphic, Group, GroupProps } from '@mantine/core';\n\nconst PolymorphicGroup = polymorphic<'button', GroupProps>(Group);\n\nfunction Demo() {\n  return (\n    <PolymorphicGroup component=\"a\" href=\"https://mantine.dev\" />\n  );\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(i,{...e,children:(0,n.jsx)(s,{...e})})}])},342357,(e,n,o)=>{let t="/guides/polymorphic";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(820462)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
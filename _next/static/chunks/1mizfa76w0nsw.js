(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return o||t(r,Symbol.toStringTag,{value:"Module"}),r}])},330573,e=>{"use strict";var t=e.i(44091),o=e.i(391466),r=e.i(956449),n=e.i(232471),a={root:"m_4451eb3a"},s=e.i(391398);let i=(0,r.polymorphicFactory)(e=>{let r=(0,t.useProps)("Center",null,e),{classNames:i,className:c,style:u,styles:m,unstyled:l,vars:d,inline:g,mod:p,attributes:h,...x}=r,b=(0,o.useStyles)({name:"Center",props:r,classes:a,className:c,style:u,classNames:i,styles:m,unstyled:l,attributes:h,vars:d});return(0,s.jsx)(n.Box,{mod:[{inline:g},p],...b("root"),...x})});i.classes=a,i.displayName="@mantine/core/Center",e.s(["Center",0,i],330573)},873034,e=>{"use strict";var t=e.i(391398),o=e.i(38856),r=e.i(648863),n=e.i(433512),a=e.i(481178),s=e.i(44091),i=e.i(391466),c=e.i(956449),u=e.i(232471),m={root:"m_2ce0de02"};let l=(0,a.createVarsResolver)((e,{radius:t})=>({root:{"--bi-radius":void 0===t?void 0:(0,n.getRadius)(t)}})),d=(0,c.polymorphicFactory)(e=>{let o=(0,s.useProps)("BackgroundImage",null,e),{classNames:r,className:n,style:a,styles:c,unstyled:d,vars:g,radius:p,src:h,variant:x,attributes:b,...v}=o;return(0,t.jsx)(u.Box,{variant:x,...(0,i.useStyles)({name:"BackgroundImage",props:o,classes:m,className:n,style:a,classNames:r,styles:c,unstyled:d,attributes:b,vars:g,varsResolver:l})("root",{style:{backgroundImage:`url(${h})`}}),...v})});d.classes=m,d.varsResolver=l,d.displayName="@mantine/core/BackgroundImage";var g=e.i(330573),p=e.i(883364);let h={type:"configurator",component:function(e){return(0,t.jsx)(u.Box,{maw:300,mx:"auto",children:(0,t.jsx)(d,{...e,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png",children:(0,t.jsx)(g.Center,{p:"md",children:(0,t.jsx)(p.Text,{c:"white",children:"BackgroundImage component can be used to add any content on image. It is useful for hero headers and other similar sections"})})})})},code:`
import { BackgroundImage, Center, Text, Box } from '@mantine/core';


function Demo() {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        {{props}}
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
`,controls:[{prop:"radius",type:"size",initialValue:"md",libraryValue:null}]};var x=(0,r.__exportAll)({usage:()=>h});e.i(603441);var b=e.i(62558);e.i(457450);var v=e.i(418026);let y=(0,b.Layout)(v.MDX_DATA.BackgroundImage);function f(e){let r={h2:"h2",...(0,o.useMDXComponents)(),...e.components},{Demo:n,Polymorphic:a}=r;return n||j("Demo",!0),a||j("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:x.usage}),"\n",(0,t.jsx)(a,{defaultElement:"div",changeToElement:"button",component:"BackgroundImage"})]})}function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(y,{...e,children:(0,t.jsx)(f,{...e})})}],873034)},868708,(e,t,o)=>{let r="/core/background-image";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(873034)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var s in e)t(o,s,{get:e[s],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},297099,e=>{"use strict";var t=e.i(648863),n=e.i(779177),o=e.i(608856),s=e.i(433512),i=e.i(481178),a=e.i(44091),l=e.i(391466),r=e.i(275519),c=e.i(232471),d=e.i(284629),h={root:"m_bcaa9990",control:"m_375a65ef"},p=e.i(332977),f=e.i(107315),u=e.i(183292),m=e.i(391398);let x={getControlProps:({data:e})=>({children:e.value})},g=(0,i.createVarsResolver)((e,{color:t,size:o,variant:i,autoContrast:a,depthOffset:l,radius:r})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:i||"filled",autoContrast:a});return{root:{"--toc-bg":"none"!==i?c.background:void 0,"--toc-color":"none"!==i?c.color:void 0,"--toc-size":(0,s.getFontSize)(o),"--toc-depth-offset":(0,n.rem)(l),"--toc-radius":(0,s.getRadius)(r)}}}),j=(0,r.factory)(e=>{let t=(0,a.useProps)("TableOfContents",x,e),{classNames:n,className:s,style:i,styles:r,unstyled:j,vars:b,color:y,autoContrast:O,scrollSpyOptions:C,initialData:v,getControlProps:T,minDepthToOffset:D,depthOffset:w,variant:N,radius:_,reinitializeRef:k,attributes:z,...P}=t,S=(0,l.useStyles)({name:"TableOfContents",classes:h,props:t,className:s,style:i,classNames:n,styles:r,unstyled:j,attributes:z,vars:b,varsResolver:g}),V=(0,f.useId)(),I=(0,u.useScrollSpy)(C);(0,p.assignRef)(k,I.reinitialize);let R=(I.initialized?I.data:v||[]).map((e,t)=>{let n=T?.({active:t===I.active,data:{...e,getNode:e.getNode||o.noop}});return(0,m.jsx)(d.UnstyledButton,{__vars:{"--depth-offset":`${e.depth-(D||1)}`},"data-active":t===I.active||void 0,variant:N,...n,...S("control",{className:n?.className,style:n?.style})},e.id||`${V}-${t}`)});return(0,m.jsx)(c.Box,{variant:N,...S("root"),...P,children:R})});j.displayName="@mantine/core/TableOfContents",j.classes=h,j.varsResolver=g;let b={type:"configurator",component:function(e){return(0,m.jsx)(j,{...e,scrollSpyOptions:{selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
import { TableOfContents } from '@mantine/core';


function Demo() {
  return (
    <TableOfContents
      {{props}}
      scrollSpyOptions={{
        selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"segmented",prop:"variant",initialValue:"filled",data:["filled","light","none"],libraryValue:null},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"__"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"__"}]},y={type:"code",component:function(){return(0,m.jsx)(j,{minDepthToOffset:0,depthOffset:40,size:"sm",scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      size="sm"
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
`,maxWidth:340,centered:!0},O={type:"code",component:function(){return(0,m.jsx)(j,{size:"sm",autoContrast:!0,color:"yellow.4",scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      size="sm"
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
`,maxWidth:340,centered:!0};var C={control:"m_b511a2ce"};let v={type:"code",component:function(){return(0,m.jsx)(j,{size:"sm",variant:"none",classNames:C,minDepthToOffset:0,depthOffset:40,scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:[{fileName:"Demo.tsx",code:`
import { TableOfContents } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <TableOfContents
      size="sm"
      variant="none"
      classNames={classes}
      minDepthToOffset={0}
      depthOffset={40}
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.control {
  transition: transform 100ms ease;

  &[data-active] {
    background-color: var(--mantine-color-lime-4);
    color: var(--mantine-color-black);
    transform: scale(1.1);
  }
}`,language:"scss"}],maxWidth:340,centered:!0};var T=(0,t.__exportAll)({autoContrast:()=>O,depthOffset:()=>y,styles:()=>v,usage:()=>b});e.s(["TableOfContentsDemos",0,T],297099)},298320,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(297099);e.i(603441);var s=e.i(62558);e.i(457450);var i=e.i(418026);let a=(0,s.Layout)(i.MDX_DATA.TableOfContents);function l(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{AutoContrast:i,Demo:a}=s;return i||r("AutoContrast",!0),a||r("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"TableOfContents"})," component to display a table of contents like\nin the sidebar of mantine.dev documentation. The component tracks\nthe scroll position and highlights the current heading in the list."]}),"\n",(0,t.jsx)(a,{data:o.TableOfContentsDemos.usage}),"\n",(0,t.jsx)(s.h2,{id:"use-scroll-spy-options",children:"use-scroll-spy options"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"TableOfContents"})," is based on the ",(0,t.jsx)(s.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook.\nYou can pass options down to the ",(0,t.jsx)(s.code,{children:"use-scroll-spy"})," hook using the ",(0,t.jsx)(s.code,{children:"scrollSpyOptions"})," prop."]}),"\n",(0,t.jsx)(s.p,{children:"Example of customizing selector, depth and value retrieval:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      scrollSpyOptions={{\n        selector: '#mdx [data-heading]',\n        getDepth: (element) => Number(element.getAttribute('data-order')),\n        getValue: (element) => element.getAttribute('data-heading') || '',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"pass-props-to-controls",children:"Pass props to controls"}),"\n",(0,t.jsxs)(s.p,{children:["You can pass props down to controls rendered by the ",(0,t.jsx)(s.code,{children:"TableOfContents"})," component\nwith the ",(0,t.jsx)(s.code,{children:"getControlProps"})," function. It accepts an object with ",(0,t.jsx)(s.code,{children:"active"})," and ",(0,t.jsx)(s.code,{children:"data"}),"\nproperties and should return a props object."]}),"\n",(0,t.jsx)(s.p,{children:"Example of changing controls to links:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      getControlProps={({ active, data }) => ({\n        component: 'a',\n        href: `#${data.id}`,\n        style: { color: active ? 'blue' : 'gray' },\n        children: data.value,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"initial-data",children:"Initial data"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"TableOfContents"})," retrieves data on mount. If you want to render headings\nbefore the ",(0,t.jsx)(s.code,{children:"TableOfContents"})," component is mounted (for example during server-side rendering),\nyou can pass the ",(0,t.jsx)(s.code,{children:"initialData"})," prop with an array of headings data. ",(0,t.jsx)(s.code,{children:"initialData"})," is replaced\nwith actual data on mount."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      initialData={[\n        { id: '1', value: 'Heading 1', depth: 1 },\n        { id: '2', value: 'Heading 2', depth: 2 },\n        { id: '3', value: 'Heading 3', depth: 3 },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"depth-offset",children:"Depth offset"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"minDepthToOffset"})," prop to set the minimum depth at which offset should be applied.\nBy default, ",(0,t.jsx)(s.code,{children:"minDepthToOffset"})," is ",(0,t.jsx)(s.code,{children:"1"}),", which means that first and second level headings\nwill not be offset. Set it to ",(0,t.jsx)(s.code,{children:"0"})," to apply offset to all headings."]}),"\n",(0,t.jsxs)(s.p,{children:["To control the offset value in px, set the ",(0,t.jsx)(s.code,{children:"depthOffset"})," prop:"]}),"\n",(0,t.jsx)(a,{data:o.TableOfContentsDemos.depthOffset}),"\n",(0,t.jsx)(i,{component:"TableOfContents"}),"\n",(0,t.jsx)(a,{data:o.TableOfContentsDemos.autoContrast}),"\n",(0,t.jsx)(s.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,t.jsxs)(s.p,{children:["Example of customizing ",(0,t.jsx)(s.code,{children:"TableOfContents"})," with ",(0,t.jsx)(s.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,t.jsx)(s.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,t.jsx)(a,{data:o.TableOfContentsDemos.styles}),"\n",(0,t.jsx)(s.h2,{id:"reinitialize",children:"Reinitialize"}),"\n",(0,t.jsxs)(s.p,{children:["By default, ",(0,t.jsx)(s.code,{children:"TableOfContents"})," does not track changes in the DOM. If you want\nto update headings data after the parent component has mounted, you can use\n",(0,t.jsx)(s.code,{children:"reinitializeRef"})," to get the reinitialize function from the ",(0,t.jsx)(s.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { useRef, useLayoutEffect } from 'react';\nimport { TableOfContents } from '@mantine/core';\n\nfunction Demo({ dependency }) {\n  const reinitializeRef = useRef(() => {});\n\n  useLayoutEffect(() => {\n    reinitializeRef.current();\n  }, [dependency]);\n\n  return <TableOfContents reinitializeRef={reinitializeRef} />;\n}\n"})})]})}function r(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})})}])},664531,(e,t,n)=>{let o="/core/table-of-contents";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(298320)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
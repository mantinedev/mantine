(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47461],{74087:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table-of-contents",function(){return t(69069)}])},69069:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var o=t(31085),s=t(71184),r=t(16631),l=t(55897);let a={type:"code",component:function(){return(0,o.jsx)(l.M,{minDepthToOffset:0,depthOffset:40,size:"sm",scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,o.jsx)(l.M,{size:"sm",autoContrast:!0,color:"yellow.4",scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,maxWidth:340,centered:!0};var c={control:"m_b511a2ce"};let d={type:"code",component:function(){return(0,o.jsx)(l.M,{size:"sm",variant:"none",classNames:c,minDepthToOffset:0,depthOffset:40,scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],maxWidth:340,centered:!0};var h=t(85954),p=t(38215);let f=(0,h.P)(p.XZ.TableOfContents);function u(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{AutoContrast:t,Demo:l}=n;return t||x("AutoContrast",!0),l||x("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"TableOfContents"})," component to display table of contents like\nin the sidebar of mantine.dev documentation. The component tracks\nscroll position and highlights current heading in the list."]}),"\n",(0,o.jsx)(l,{data:r.C}),"\n",(0,o.jsx)(n.h2,{id:"use-scroll-spy-options",children:"use-scroll-spy options"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TableOfContents"})," in based on ",(0,o.jsx)(n.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook.\nYou can pass options down to ",(0,o.jsx)(n.code,{children:"use-scroll-spy"})," hook using ",(0,o.jsx)(n.code,{children:"scrollSpyOptions"})," prop."]}),"\n",(0,o.jsx)(n.p,{children:"Example of customizing selector, depth and value retrieval:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      scrollSpyOptions={{\n        selector: '#mdx [data-heading]',\n        getDepth: (element) => Number(element.getAttribute('data-order')),\n        getValue: (element) => element.getAttribute('data-heading') || '',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"pass-props-to-controls",children:"Pass props to controls"}),"\n",(0,o.jsxs)(n.p,{children:["You can pass props down to controls rendered by ",(0,o.jsx)(n.code,{children:"TableOfContents"})," component\nwith ",(0,o.jsx)(n.code,{children:"getControlProps"})," function. It accepts an object with ",(0,o.jsx)(n.code,{children:"active"})," and ",(0,o.jsx)(n.code,{children:"data"}),"\nproperties and should return props object."]}),"\n",(0,o.jsx)(n.p,{children:"Example of changing controls to links:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      getControlProps={({ active, data }) => ({\n        component: 'a',\n        href: `#${data.id}`,\n        style: { color: active ? 'blue' : 'gray' },\n        children: data.value,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"initial-data",children:"Initial data"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TableOfContents"})," retrieves data on mount. If you want to render headings\nbefore ",(0,o.jsx)(n.code,{children:"TableOfContents"})," component is mounted (for example during server-side rendering),\nyou can pass ",(0,o.jsx)(n.code,{children:"initialData"})," prop with array of headings data. ",(0,o.jsx)(n.code,{children:"initialData"})," is replaced\nwith actual data on mount."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      initialData={[\n        { id: '1', value: 'Heading 1', depth: 1 },\n        { id: '2', value: 'Heading 2', depth: 2 },\n        { id: '3', value: 'Heading 3', depth: 3 },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"depth-offset",children:"Depth offset"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"minDepthToOffset"})," prop to set minimum depth at which offset should be applied.\nBy default, ",(0,o.jsx)(n.code,{children:"minDepthToOffset"})," is ",(0,o.jsx)(n.code,{children:"1"}),", which means that first and second level headings\nwill not be offset. Set it to ",(0,o.jsx)(n.code,{children:"0"})," to apply offset to all headings."]}),"\n",(0,o.jsxs)(n.p,{children:["To control offset value in px, set ",(0,o.jsx)(n.code,{children:"depthOffset"})," prop:"]}),"\n",(0,o.jsx)(l,{data:a}),"\n",(0,o.jsx)(t,{component:"TableOfContents"}),"\n",(0,o.jsx)(l,{data:i}),"\n",(0,o.jsx)(n.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsxs)(n.p,{children:["Example of customizing ",(0,o.jsx)(n.code,{children:"TableOfContents"})," with ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(n.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(l,{data:d}),"\n",(0,o.jsx)(n.h2,{id:"reinitialize",children:"Reinitialize"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"TableOfContents"})," does not track changes in the DOM. If you want\nto update headings data after the parent component has mounted, you can use\n",(0,o.jsx)(n.code,{children:"reinitializeRef"})," to get reinitialize function from ",(0,o.jsx)(n.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useRef, useEffect } from 'react';\nimport { TableOfContents } from '@mantine/core';\n\nfunction Demo({ dependency }) {\n  const reinitializeRef = useRef(() => {});\n\n  useEffect(() => {\n    reinitializeRef.current();\n  }, [dependency]);\n\n  return <TableOfContents reinitializeRef={reinitializeRef} />;\n}\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(f,{...e,children:(0,o.jsx)(u,{...e})})}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16631:(e,n,t)=>{"use strict";t.d(n,{C:()=>r});var o=t(31085),s=t(55897);let r={type:"configurator",component:function(e){return(0,o.jsx)(s.M,{...e,scrollSpyOptions:{selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,centered:!0,maxWidth:340,controls:[{type:"segmented",prop:"variant",initialValue:"filled",data:["filled","light","none"],libraryValue:null},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"__"}]}},55897:(e,n,t)=>{"use strict";t.d(n,{M:()=>j});var o=t(31085),s=t(97567),r=t(14921),l=t(34321),a=t(39735);t(14041);var i=t(33450),c=t(7098),d=t(29686),h=t(69564),p=t(34056),f=t(6754),u=t(33970),m={root:"m_bcaa9990",control:"m_375a65ef"};let x={getControlProps:({data:e})=>({children:e.value})},g=(0,c.V)((e,{color:n,size:t,variant:o,autoContrast:s,depthOffset:r,radius:l})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,variant:o||"filled",autoContrast:s});return{root:{"--toc-bg":"none"!==o?c.background:void 0,"--toc-color":"none"!==o?c.color:void 0,"--toc-size":(0,i.ny)(t),"--toc-depth-offset":(0,a.D)(r),"--toc-radius":(0,i.nJ)(l)}}}),j=(0,f.P9)((e,n)=>{let t=(0,d.Y)("TableOfContents",x,e),{classNames:a,className:i,style:c,styles:f,unstyled:j,vars:b,color:y,autoContrast:C,scrollSpyOptions:O,initialData:v,getControlProps:T,minDepthToOffset:w,depthOffset:N,variant:D,radius:k,reinitializeRef:z,..._}=t,P=(0,h.I)({name:"TableOfContents",classes:m,props:t,className:i,style:c,classNames:a,styles:f,unstyled:j,vars:b,varsResolver:g}),V=(0,s.B)(),I=(0,r.f)(O);(0,l.bl)(z,I.reinitialize);let S=(I.initialized?I.data:v||[]).map((e,n)=>{let t=T?.({active:n===I.active,data:{...e,getNode:e.getNode||(()=>{})}});return(0,o.jsx)(u.N,{__vars:{"--depth-offset":`${e.depth-(w||1)}`},"data-active":n===I.active||void 0,variant:D,...t,...P("control",{className:t?.className,style:t?.style})},e.id||`${V}-${n}`)});return(0,o.jsx)(p.a,{ref:n,variant:D,...P("root"),..._,children:S})});j.displayName="@mantine/core/TableOfContents",j.classes=m}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(74087)),_N_E=e.O()}]);
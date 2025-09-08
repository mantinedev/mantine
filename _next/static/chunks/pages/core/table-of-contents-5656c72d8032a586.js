(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47461],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},31778:(e,t,n)=>{"use strict";n.d(t,{C:()=>a});var o=n(6029),s=n(88179);let a={type:"configurator",component:function(e){return(0,o.jsx)(s.M,{...e,scrollSpyOptions:{selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,centered:!0,maxWidth:340,controls:[{type:"segmented",prop:"variant",initialValue:"filled",data:["filled","light","none"],libraryValue:null},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"__"}]}},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},35380:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var o=n(6029),s=n(16285),a=n(31778),l=n(88179);let i={type:"code",component:function(){return(0,o.jsx)(l.M,{minDepthToOffset:0,depthOffset:40,size:"sm",scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,maxWidth:340,centered:!0},r={type:"code",component:function(){return(0,o.jsx)(l.M,{size:"sm",autoContrast:!0,color:"yellow.4",scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,maxWidth:340,centered:!0};var d={control:"m_b511a2ce"};let c={type:"code",component:function(){return(0,o.jsx)(l.M,{size:"sm",variant:"none",classNames:d,minDepthToOffset:0,depthOffset:40,scrollSpyOptions:{selector:"h1, h2, h3, h4, h5, h6"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],maxWidth:340,centered:!0};var h=n(38547),p=n(5262);let u=(0,h.P)(p.XZ.TableOfContents);function f(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{AutoContrast:n,Demo:l}=t;return n||g("AutoContrast",!0),l||g("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"TableOfContents"})," component to display table of contents like\nin the sidebar of mantine.dev documentation. The component tracks\nscroll position and highlights current heading in the list."]}),"\n",(0,o.jsx)(l,{data:a.C}),"\n",(0,o.jsx)(t.h2,{id:"use-scroll-spy-options",children:"use-scroll-spy options"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TableOfContents"})," in based on ",(0,o.jsx)(t.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook.\nYou can pass options down to ",(0,o.jsx)(t.code,{children:"use-scroll-spy"})," hook using ",(0,o.jsx)(t.code,{children:"scrollSpyOptions"})," prop."]}),"\n",(0,o.jsx)(t.p,{children:"Example of customizing selector, depth and value retrieval:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      scrollSpyOptions={{\n        selector: '#mdx [data-heading]',\n        getDepth: (element) => Number(element.getAttribute('data-order')),\n        getValue: (element) => element.getAttribute('data-heading') || '',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"pass-props-to-controls",children:"Pass props to controls"}),"\n",(0,o.jsxs)(t.p,{children:["You can pass props down to controls rendered by ",(0,o.jsx)(t.code,{children:"TableOfContents"})," component\nwith ",(0,o.jsx)(t.code,{children:"getControlProps"})," function. It accepts an object with ",(0,o.jsx)(t.code,{children:"active"})," and ",(0,o.jsx)(t.code,{children:"data"}),"\nproperties and should return props object."]}),"\n",(0,o.jsx)(t.p,{children:"Example of changing controls to links:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      getControlProps={({ active, data }) => ({\n        component: 'a',\n        href: `#${data.id}`,\n        style: { color: active ? 'blue' : 'gray' },\n        children: data.value,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"initial-data",children:"Initial data"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TableOfContents"})," retrieves data on mount. If you want to render headings\nbefore ",(0,o.jsx)(t.code,{children:"TableOfContents"})," component is mounted (for example during server-side rendering),\nyou can pass ",(0,o.jsx)(t.code,{children:"initialData"})," prop with array of headings data. ",(0,o.jsx)(t.code,{children:"initialData"})," is replaced\nwith actual data on mount."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { TableOfContents } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TableOfContents\n      initialData={[\n        { id: '1', value: 'Heading 1', depth: 1 },\n        { id: '2', value: 'Heading 2', depth: 2 },\n        { id: '3', value: 'Heading 3', depth: 3 },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"depth-offset",children:"Depth offset"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"minDepthToOffset"})," prop to set minimum depth at which offset should be applied.\nBy default, ",(0,o.jsx)(t.code,{children:"minDepthToOffset"})," is ",(0,o.jsx)(t.code,{children:"1"}),", which means that first and second level headings\nwill not be offset. Set it to ",(0,o.jsx)(t.code,{children:"0"})," to apply offset to all headings."]}),"\n",(0,o.jsxs)(t.p,{children:["To control offset value in px, set ",(0,o.jsx)(t.code,{children:"depthOffset"})," prop:"]}),"\n",(0,o.jsx)(l,{data:i}),"\n",(0,o.jsx)(n,{component:"TableOfContents"}),"\n",(0,o.jsx)(l,{data:r}),"\n",(0,o.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsxs)(t.p,{children:["Example of customizing ",(0,o.jsx)(t.code,{children:"TableOfContents"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(l,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"reinitialize",children:"Reinitialize"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"TableOfContents"})," does not track changes in the DOM. If you want\nto update headings data after the parent component has mounted, you can use\n",(0,o.jsx)(t.code,{children:"reinitializeRef"})," to get reinitialize function from ",(0,o.jsx)(t.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useRef, useLayoutEffect } from 'react';\nimport { TableOfContents } from '@mantine/core';\n\nfunction Demo({ dependency }) {\n  const reinitializeRef = useRef(() => {});\n\n  useLayoutEffect(() => {\n    reinitializeRef.current();\n  }, [dependency]);\n\n  return <TableOfContents reinitializeRef={reinitializeRef} />;\n}\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(f,{...e})})}function g(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},44783:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table-of-contents",function(){return n(35380)}])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88179:(e,t,n)=>{"use strict";n.d(t,{M:()=>y});var o=n(6029),s=n(2011),a=n(23408),l=n(28136),i=n(26082);n(55729);var r=n(14163),d=n(33987),c=n(38919),h=n(15583),p=n(76320),u=n(8411),f=n(17976),m={root:"m_bcaa9990",control:"m_375a65ef"};let g={getControlProps:({data:e})=>({children:e.value})},v=(0,d.V)((e,{color:t,size:n,variant:o,autoContrast:s,depthOffset:a,radius:l})=>{let d=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:o||"filled",autoContrast:s});return{root:{"--toc-bg":"none"!==o?d.background:void 0,"--toc-color":"none"!==o?d.color:void 0,"--toc-size":(0,r.ny)(n),"--toc-depth-offset":(0,i.D)(a),"--toc-radius":(0,r.nJ)(l)}}}),y=(0,u.P9)((e,t)=>{let n=(0,c.Y)("TableOfContents",g,e),{classNames:i,className:r,style:d,styles:u,unstyled:y,vars:x,color:j,autoContrast:k,scrollSpyOptions:b,initialData:C,getControlProps:O,minDepthToOffset:M,depthOffset:T,variant:w,radius:N,reinitializeRef:A,attributes:D,...z}=n,_=(0,h.I)({name:"TableOfContents",classes:m,props:n,className:r,style:d,classNames:i,styles:u,unstyled:y,attributes:D,vars:x,varsResolver:v}),P=(0,s.B)(),V=(0,a.f)(b);(0,l.bl)(A,V.reinitialize);let I=(V.initialized?V.data:C||[]).map((e,t)=>{let n=O?.({active:t===V.active,data:{...e,getNode:e.getNode||(()=>{})}});return(0,o.jsx)(f.N,{__vars:{"--depth-offset":`${e.depth-(M||1)}`},"data-active":t===V.active||void 0,variant:w,...n,..._("control",{className:n?.className,style:n?.style})},e.id||`${P}-${t}`)});return(0,o.jsx)(p.a,{ref:t,variant:w,..._("root"),...z,children:I})});y.displayName="@mantine/core/TableOfContents",y.classes=m},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=44783)),_N_E=e.O()}]);
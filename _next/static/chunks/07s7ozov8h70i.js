(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let i={};for(var o in e)n(i,o,{get:e[o],enumerable:!0});return t||n(i,Symbol.toStringTag,{value:"Module"}),i}])},741395,e=>{"use strict";var n=e.i(648863),t=e.i(883364),i=e.i(284629),o=e.i(391398),l=e.i(183292);let s={type:"code",component:function(){let e=(0,l.useScrollSpy)({selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"}),n=e.data.map((n,t)=>(0,o.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*n.depth,background:t===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,o.jsx)(i.UnstyledButton,{onClick:()=>n.getNode().scrollIntoView(),children:n.value})},n.id));return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.Text,{children:"Scroll to heading:"}),(0,o.jsx)("ul",{style:{margin:0,padding:0},children:n})]})},code:`
import { Text, UnstyledButton } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';

function Demo() {
  const spy = useScrollSpy({
    selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
  });

  const headings = spy.data.map((heading, index) => (
    <li
      key={heading.id}
      style={{
        listStylePosition: 'inside',
        paddingInlineStart: heading.depth * 20,
        background: index === spy.active ? 'var(--mantine-color-blue-light)' : undefined,
      }}
    >
      <UnstyledButton onClick={() => heading.getNode().scrollIntoView()}>
        {heading.value}
      </UnstyledButton>
    </li>
  ));

  return (
    <div>
      <Text>Scroll to heading:</Text>
      <ul style={{ margin: 0, padding: 0 }}>{headings}</ul>
    </div>
  );
}
`},d={type:"code",component:function(){let e=(0,l.useScrollSpy)({selector:"#mdx [data-heading]",getDepth:e=>Number(e.getAttribute("data-order")),getValue:e=>e.getAttribute("data-heading")||""}),n=e.data.map((n,t)=>(0,o.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*n.depth,background:t===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,o.jsx)(i.UnstyledButton,{onClick:()=>n.getNode().scrollIntoView(),children:n.value})},n.id));return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.Text,{children:"Scroll to heading:"}),(0,o.jsx)("ul",{style:{margin:0,padding:0},children:n})]})},code:`
import { Text, UnstyledButton } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';

function Demo() {
  const spy = useScrollSpy({
    selector: '#mdx [data-heading]',
    getDepth: (element) => Number(element.getAttribute('data-order')),
    getValue: (element) => element.getAttribute('data-heading') || '',
  });

  const headings = spy.data.map((heading, index) => (
    <li
      key={heading.id}
      style={{
        listStylePosition: 'inside',
        paddingInlineStart: heading.depth * 20,
        background: index === spy.active ? 'var(--mantine-color-blue-light)' : undefined,
      }}
    >
      <UnstyledButton onClick={() => heading.getNode().scrollIntoView()}>
        {heading.value}
      </UnstyledButton>
    </li>
  ));

  return (
    <div>
      <Text>Scroll to heading:</Text>
      <ul style={{ margin: 0, padding: 0 }}>{headings}</ul>
    </div>
  );
}
`};var r=(0,n.__exportAll)({selector:()=>d,usage:()=>s});e.s(["UseScrollSpyDemos",0,r],741395)},159968,e=>{"use strict";var n=e.i(391398),t=e.i(38856),i=e.i(741395);e.i(603441);var o=e.i(62558);e.i(457450);var l=e.i(418026);let s=(0,o.Layout)(l.MDX_DATA.useScrollSpy);function d(e){let o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:l}=o;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"use-scroll-spy"})," hook tracks the scroll position and returns the index of the\nelement that is currently in the viewport. It is useful for creating\ntable of contents components (like in the mantine.dev sidebar on the right side)\nand similar features."]}),"\n",(0,n.jsx)(l,{data:i.UseScrollSpyDemos.usage}),"\n",(0,n.jsx)(o.h2,{id:"hook-options",children:"Hook options"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"use-scroll-spy"})," hook accepts an object with options:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"selector"})," - selector to get headings; by default it is ",(0,n.jsx)(o.code,{children:"'h1, h2, h3, h4, h5, h6'"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"getDepth"})," - a function to retrieve the depth of a heading; by default depth is calculated based on the tag name"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"getValue"})," - a function to retrieve the heading value; by default ",(0,n.jsx)(o.code,{children:"element.textContent"})," is used"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"scrollHost"})," - host element to attach scroll event listener, if not provided, ",(0,n.jsx)(o.code,{children:"window"})," is used"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"offset"})," - offset from the top of the viewport to use when determining the active heading, by default ",(0,n.jsx)(o.code,{children:"0"})," is used"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using custom options to get headings with the ",(0,n.jsx)(o.code,{children:"data-heading"})," attribute:"]}),"\n",(0,n.jsx)(l,{data:i.UseScrollSpyDemos.selector}),"\n",(0,n.jsx)(o.h2,{id:"reinitializing-hook-data",children:"Reinitializing hook data"}),"\n",(0,n.jsxs)(o.p,{children:["By default, ",(0,n.jsx)(o.code,{children:"use-scroll-spy"})," does not track changes in the DOM. If you want\nto update the headings data after the parent component has mounted, you can use\nthe ",(0,n.jsx)(o.code,{children:"reinitialize"})," function:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useScrollSpy } from '@mantine/hooks';\n\nfunction Demo({ dependency }) {\n  const { reinitialize } = useScrollSpy();\n\n  useEffect(() => {\n    reinitialize();\n  }, [dependency]);\n\n  return null;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsxs)(o.p,{children:["All types used in the definition are exported from ",(0,n.jsx)(o.code,{children:"@mantine/hooks"})," package."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface UseScrollSpyHeadingData {\n  /** Heading depth, 1-6 */\n  depth: number;\n\n  /** Heading text content value */\n  value: string;\n\n  /** Heading id */\n  id: string;\n\n  /** Function to get heading node */\n  getNode: () => HTMLElement;\n}\n\ninterface UseScrollSpyOptions {\n  /** Selector to get headings, `'h1, h2, h3, h4, h5, h6'` by default */\n  selector?: string;\n\n  /** A function to retrieve depth of heading, by default depth is calculated based on tag name */\n  getDepth?: (element: HTMLElement) => number;\n\n  /** A function to retrieve heading value, by default `element.textContent` is used */\n  getValue?: (element: HTMLElement) => string;\n\n  /** Host element to attach scroll event listener, if not provided, `window` is used */\n  scrollHost?: HTMLElement;\n\n  /** Offset from the top of the viewport to use when determining the active heading, `0` by default */\n  offset?: number;\n}\n\ninterface UseScrollSpyReturnValue {\n  /** Index of the active heading in the `data` array */\n  active: number;\n\n  /** Headings data. If not initialize, data is represented by an empty array. */\n  data: UseScrollSpyHeadingData[];\n\n  /** True if headings value have been retrieved from the DOM. */\n  initialized: boolean;\n\n  /** Function to update headings values after the parent component has mounted. */\n  reinitialize: () => void;\n}\n\nfunction useScrollSpy(options?: UseScrollSpyOptions): UseScrollSpyReturnValue\n"})}),"\n",(0,n.jsx)(o.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"UseScrollSpyOptions"})," and ",(0,n.jsx)(o.code,{children:"UseScrollSpyReturnValue"})," types are exported from the ",(0,n.jsx)(o.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import type { UseScrollSpyOptions, UseScrollSpyReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})})}])},112258,(e,n,t)=>{let i="/hooks/use-scroll-spy";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(159968)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);
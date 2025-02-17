(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12811],{70383:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-spy",function(){return t(81917)}])},81917:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>g});var i=t(31085),o=t(71184),d=t(13001),l=t(33970),a=t(93065),s=t(14921);let r={type:"code",component:function(){let e=(0,s.f)({selector:"#mdx [data-heading]",getDepth:e=>Number(e.getAttribute("data-order")),getValue:e=>e.getAttribute("data-heading")||""}),n=e.data.map((n,t)=>(0,i.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*n.depth,background:t===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,i.jsx)(l.N,{onClick:()=>n.getNode().scrollIntoView(),children:n.value})},n.id));return(0,i.jsxs)("div",{children:[(0,i.jsx)(a.E,{children:"Scroll to heading:"}),(0,i.jsx)("ul",{style:{margin:0,padding:0},children:n})]})},code:`
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
`};var c=t(85954),h=t(38215);let u=(0,c.P)(h.XZ.useScrollSpy);function p(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-scroll-spy"})," hook tracks scroll position and returns index of the\nelement that is currently in the viewport. It is useful for creating\ntable of contents components (like in mantine.dev sidebar on the right side)\nand similar features."]}),"\n",(0,i.jsx)(t,{data:d.s}),"\n",(0,i.jsx)(n.h2,{id:"hook-options",children:"Hook options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-scroll-spy"})," accepts an object with options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"selector"})," - selector to get headings, by default it is ",(0,i.jsx)(n.code,{children:"'h1, h2, h3, h4, h5, h6'"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getDepth"})," - a function to retrieve depth of heading, by default depth is calculated based on tag name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getValue"})," - a function to retrieve heading value, by default ",(0,i.jsx)(n.code,{children:"element.textContent"})," is used"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example of using custom options to get headings with ",(0,i.jsx)(n.code,{children:"data-heading"})," attribute:"]}),"\n",(0,i.jsx)(t,{data:r}),"\n",(0,i.jsx)(n.h2,{id:"reinitializing-hook-data",children:"Reinitializing hook data"}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"use-scroll-spy"})," does not track changes in the DOM. If you want\nto update headings data after the parent component has mounted, you can use\n",(0,i.jsx)(n.code,{children:"reinitialize"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useScrollSpy } from '@mantine/hooks';\n\nfunction Demo({ dependency }) {\n  const { reinitialize } = useScrollSpy();\n\n  useEffect(() => {\n    reinitialize();\n  }, [dependency]);\n\n  return null;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(n.p,{children:["All types used in the definition are exported from ",(0,i.jsx)(n.code,{children:"@mantine/hooks"})," package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"interface UseScrollSpyHeadingData {\n  /** Heading depth, 1-6 */\n  depth: number;\n\n  /** Heading text content value */\n  value: string;\n\n  /** Heading id */\n  id: string;\n\n  /** Function to get heading node */\n  getNode: () => HTMLElement;\n}\n\ninterface UseScrollSpyOptions {\n  /** Selector to get headings, `'h1, h2, h3, h4, h5, h6'` by default */\n  selector?: string;\n\n  /** A function to retrieve depth of heading, by default depth is calculated based on tag name */\n  getDepth?: (element: HTMLElement) => number;\n\n  /** A function to retrieve heading value, by default `element.textContent` is used */\n  getValue?: (element: HTMLElement) => string;\n}\n\ninterface UseScrollSpyReturnType {\n  /** Index of the active heading in the `data` array */\n  active: number;\n\n  /** Headings data. If not initialize, data is represented by an empty array. */\n  data: UseScrollSpyHeadingData[];\n\n  /** True if headings value have been retrieved from the DOM. */\n  initialized: boolean;\n\n  /** Function to update headings values after the parent component has mounted. */\n  reinitialize: () => void;\n}\n\nfunction useScrollSpy({ selector, getDepth, getValue, }?: UseScrollSpyOptions): UseScrollSpyReturnType\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(u,{...e,children:(0,i.jsx)(p,{...e})})}},13001:(e,n,t)=>{"use strict";t.d(n,{s:()=>a});var i=t(31085),o=t(33970),d=t(93065),l=t(14921);let a={type:"code",component:function(){let e=(0,l.f)({selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"}),n=e.data.map((n,t)=>(0,i.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*n.depth,background:t===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,i.jsx)(o.N,{onClick:()=>n.getNode().scrollIntoView(),children:n.value})},n.id));return(0,i.jsxs)("div",{children:[(0,i.jsx)(d.E,{children:"Scroll to heading:"}),(0,i.jsx)("ul",{style:{margin:0,padding:0},children:n})]})},code:`
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
`}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(70383)),_N_E=e.O()}]);
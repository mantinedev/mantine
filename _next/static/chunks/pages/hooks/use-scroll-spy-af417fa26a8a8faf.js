(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12811],{70383:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-scroll-spy",function(){return t(81917)}])},81917:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>g});var i=t(31085),a=t(71184),d=t(13001),s=t(33970),l=t(93065),o=t(14921);let r={type:"code",component:function(){let e=(0,o.f)({selector:"#mdx [data-heading]",getDepth:e=>Number(e.getAttribute("data-order")),getValue:e=>e.getAttribute("data-heading")||""}),n=e.data.map((n,t)=>(0,i.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*n.depth,background:t===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,i.jsx)(s.N,{onClick:()=>n.getNode().scrollIntoView(),children:n.value})},n.id));return(0,i.jsxs)("div",{children:[(0,i.jsx)(l.E,{children:"Scroll to heading:"}),(0,i.jsx)("ul",{style:{margin:0,padding:0},children:n})]})},code:`
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
`};var h=t(18675),c=t(20017);let p=(0,h.P)(c.XZ.useScrollSpy);function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-scroll-spy"})," hook tracks scroll position and returns index of the\nelement that is currently in the viewport. It is useful for creating\ntable of contents components (like in mantine.dev sidebar on the right side)\nand similar features."]}),"\n",(0,i.jsx)(t,{data:d.s}),"\n",(0,i.jsx)(n.h2,{id:"hook-options",children:"Hook options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-scroll-spy"})," accepts an object with options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"selector"})," - selector to get headings, by default it is ",(0,i.jsx)(n.code,{children:"'h1, h2, h3, h4, h5, h6'"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getDepth"})," - a function to retrieve depth of heading, by default depth is calculated based on tag name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getValue"})," - a function to retrieve heading value, by default ",(0,i.jsx)(n.code,{children:"element.textContent"})," is used"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example of using custom options to get headings with ",(0,i.jsx)(n.code,{children:"data-heading"})," attribute:"]}),"\n",(0,i.jsx)(t,{data:r}),"\n",(0,i.jsx)(n.h2,{id:"reinitializing-hook-data",children:"Reinitializing hook data"}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"use-scroll-spy"})," does not track changes in the DOM. If you want\nto update headings data after the parent component has mounted, you can use\n",(0,i.jsx)(n.code,{children:"reinitialize"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useScrollSpy } from '@mantine/hooks';\n\nfunction Demo({ dependency }) {\n  const { reinitialize } = useScrollSpy();\n\n  useEffect(() => {\n    reinitialize();\n  }, [dependency]);\n\n  return null;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(n.p,{children:["All types used in the definition are exported from ",(0,i.jsx)(n.code,{children:"@mantine/hooks"})," package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"interface UseScrollSpyHeadingData {\n  /** Heading depth, 1-6 */\n  depth: number;\n\n  /** Heading text content value */\n  value: string;\n\n  /** Heading id */\n  id: string;\n\n  /** Function to get heading node */\n  getNode: () => HTMLElement;\n}\n\ninterface UseScrollSpyOptions {\n  /** Selector to get headings, `'h1, h2, h3, h4, h5, h6'` by default */\n  selector?: string;\n\n  /** A function to retrieve depth of heading, by default depth is calculated based on tag name */\n  getDepth?: (element: HTMLElement) => number;\n\n  /** A function to retrieve heading value, by default `element.textContent` is used */\n  getValue?: (element: HTMLElement) => string;\n}\n\ninterface UseScrollSpyReturnType {\n  /** Index of the active heading in the `data` array */\n  active: number;\n\n  /** Headings data. If not initialize, data is represented by an empty array. */\n  data: UseScrollSpyHeadingData[];\n\n  /** True if headings value have been retrieved from the DOM. */\n  initialized: boolean;\n\n  /** Function to update headings values after the parent component has mounted. */\n  reinitialize: () => void;\n}\n\nfunction useScrollSpy(options?: UseScrollSpyOptions): UseScrollSpyReturnType\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"UseScrollSpyOptions"})," and ",(0,i.jsx)(n.code,{children:"UseScrollSpyReturnType"})," types are exported from ",(0,i.jsx)(n.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import type { UseScrollSpyOptions, UseScrollSpyReturnType } from '@mantine/hooks';\n"})})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,{...e,children:(0,i.jsx)(u,{...e})})}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var i=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},13001:(e,n,t)=>{"use strict";t.d(n,{s:()=>l});var i=t(31085),a=t(33970),d=t(93065),s=t(14921);let l={type:"code",component:function(){let e=(0,s.f)({selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"}),n=e.data.map((n,t)=>(0,i.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*n.depth,background:t===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,i.jsx)(a.N,{onClick:()=>n.getNode().scrollIntoView(),children:n.value})},n.id));return(0,i.jsxs)("div",{children:[(0,i.jsx)(d.E,{children:"Scroll to heading:"}),(0,i.jsx)("ul",{style:{margin:0,padding:0},children:n})]})},code:`
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
`}}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(70383)),_N_E=e.O()}]);
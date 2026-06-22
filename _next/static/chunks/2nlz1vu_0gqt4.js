(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,n=>{"use strict";var e=Object.defineProperty;n.s(["__exportAll",0,(n,t)=>{let a={};for(var i in n)e(a,i,{get:n[i],enumerable:!0});return t||e(a,Symbol.toStringTag,{value:"Module"}),a}])},516113,n=>{"use strict";var e=n.i(391398),t=n.i(38856),a=n.i(806205),i=n.i(648863),o=n.i(485108),s=n.i(725695),r=n.i(883364),l=n.i(151461);let c={type:"code",code:`
import { Button, Group, Text } from '@mantine/core';
import { usePagination } from '@mantine/hooks';

function Demo() {
  const pagination = usePagination({ total: 15, startValue: 5, initialPage: 5 });

  return (
    <>
      <Text>Active page: {pagination.active}</Text>
      <Text>Range: [{pagination.range.join(', ')}]</Text>
      <Group mt="md" gap={4}>
        <Button size="compact-sm" variant="default" onClick={pagination.first}>
          First
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.previous}>
          Previous
        </Button>
        {pagination.range.map((page, index) =>
          page === 'dots' ? (
            <span key={index}>...</span>
          ) : (
            <Button
              size="compact-sm"
              key={index}
              onClick={() => pagination.setPage(page)}
              variant={pagination.active === page ? 'filled' : 'default'}
              miw={34}
            >
              {page}
            </Button>
          )
        )}
        <Button size="compact-sm" variant="default" onClick={pagination.next}>
          Next
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.last}>
          Last
        </Button>
      </Group>
    </>
  );
}
`,component:function(){let n=(0,l.usePagination)({total:15,startValue:5,initialPage:5});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.Text,{children:["Active page: ",n.active]}),(0,e.jsxs)(r.Text,{children:["Range: [",n.range.join(", "),"]"]}),(0,e.jsxs)(s.Group,{mt:"md",gap:4,children:[(0,e.jsx)(o.Button,{size:"compact-sm",variant:"default",onClick:n.first,children:"First"}),(0,e.jsx)(o.Button,{size:"compact-sm",variant:"default",onClick:n.previous,children:"Previous"}),n.range.map((t,a)=>"dots"===t?(0,e.jsx)("span",{children:"..."},a):(0,e.jsx)(o.Button,{size:"compact-sm",onClick:()=>n.setPage(t),variant:n.active===t?"filled":"default",miw:34,children:t},a)),(0,e.jsx)(o.Button,{size:"compact-sm",variant:"default",onClick:n.next,children:"Next"}),(0,e.jsx)(o.Button,{size:"compact-sm",variant:"default",onClick:n.last,children:"Last"})]})]})}};var d=(0,i.__exportAll)({startValue:()=>c});n.i(603441);var g=n.i(62558);n.i(457450);var p=n.i(418026);let u=(0,g.Layout)(p.MDX_DATA.usePagination);function m(n){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...n.components},{Demo:o}=i;return o||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsxs)(i.p,{children:["The ",(0,e.jsx)(i.code,{children:"use-pagination"})," hook is a state management hook for the ",(0,e.jsx)(i.a,{href:"/core/pagination/",children:"Pagination"})," component;\nit manages pagination with controlled and uncontrolled state:"]}),"\n",(0,e.jsx)(o,{data:a.PaginationDemos.usage}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import { usePagination } from '@mantine/hooks';\n\nconst pagination = usePagination({ total: 10, initialPage: 1 });\n\npagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];\n\npagination.setPage(5);\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\npagination.next();\npagination.range; // -> [1, 'dots', 5, 6, 7, 'dots', 10];\n\npagination.previous();\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\npagination.last();\npagination.range; // -> [1, 'dots', 6, 7, 8, 9, 10];\n\npagination.first();\npagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];\n"})}),"\n",(0,e.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,e.jsxs)(i.p,{children:["The hook supports controlled mode; provide ",(0,e.jsx)(i.code,{children:"page"})," and ",(0,e.jsx)(i.code,{children:"onChange"})," props to manage state from outside:"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { usePagination } from '@mantine/hooks';\n\nconst [page, onChange] = useState(1);\nconst pagination = usePagination({ total: 10, page, onChange });\n\n// Will call onChange with 5\npagination.setPage(5);\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\n// ... All other examples work the same\n"})}),"\n",(0,e.jsx)(i.h2,{id:"siblings",children:"Siblings"}),"\n",(0,e.jsxs)(i.p,{children:["Control number of active item siblings with ",(0,e.jsx)(i.code,{children:"siblings"}),":"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import { usePagination } from '@mantine/hooks';\n\nconst pagination = usePagination({ total: 20, siblings: 3 });\n"})}),"\n",(0,e.jsx)(o,{data:a.PaginationDemos.siblings,demoProps:{toggle:!0}}),"\n",(0,e.jsx)(i.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,e.jsxs)(i.p,{children:["Control number of items on each boundary with ",(0,e.jsx)(i.code,{children:"boundaries"}),":"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import { usePagination } from '@mantine/hooks';\n\nconst pagination = usePagination({ total: 20, boundaries: 3 });\n"})}),"\n",(0,e.jsx)(o,{data:a.PaginationDemos.boundaries,demoProps:{toggle:!0}}),"\n",(0,e.jsx)(i.h2,{id:"start-value",children:"Start value"}),"\n",(0,e.jsxs)(i.p,{children:["Set ",(0,e.jsx)(i.code,{children:"startValue"})," to define the starting page number. For example, with ",(0,e.jsx)(i.code,{children:"startValue={5}"})," and ",(0,e.jsx)(i.code,{children:"total={15}"}),",\nthe pagination range will be from 5 to 15:"]}),"\n",(0,e.jsx)(o,{data:d.startValue}),"\n",(0,e.jsx)(i.h2,{id:"definition",children:"Definition"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"export interface UsePaginationOptions {\n  /** Page selected on initial render, defaults to 1 or startValue if provided */\n  initialPage?: number;\n\n  /** Controlled active page number */\n  page?: number;\n\n  /** Total amount of pages */\n  total: number;\n\n  /** Siblings amount on left/right side of selected page, defaults to 1 */\n  siblings?: number;\n\n  /** Amount of elements visible on left/right edges, defaults to 1  */\n  boundaries?: number;\n\n  /** Callback fired after change of each page */\n  onChange?: (page: number) => void;\n\n  /** Starting page number, defaults to 1 */\n  startValue?: number;\n}\n\nexport interface UsePaginationReturnValue {\n  /** Array of page numbers and dots */\n  range: (number | 'dots')[];\n\n  /** Active page number */\n  active: number;\n\n  /** Function to set active page */\n  setPage: (page: number) => void;\n\n  /** Function to go to next page */\n  next: () => void;\n\n  /** Function to go to previous page */\n  previous: () => void;\n\n  /** Function to go to first page */\n  first: () => void;\n\n  /** Function to go to last page */\n  last: () => void;\n}\n\nfunction usePagination(settings: UsePaginationOptions): UsePaginationReturnValue;\n"})}),"\n",(0,e.jsx)(i.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.code,{children:"UsePaginationOptions"})," and ",(0,e.jsx)(i.code,{children:"UsePaginationReturnValue"})," types are exported from the ",(0,e.jsx)(i.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-tsx",children:"import type { UsePaginationOptions, UsePaginationReturnValue } from '@mantine/hooks';\n"})})]})}n.s(["default",0,function(n={}){return(0,e.jsx)(u,{...n,children:(0,e.jsx)(m,{...n})})}],516113)},685428,(n,e,t)=>{let a="/hooks/use-pagination";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>n.r(516113)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,n=>{n.v(e=>Promise.all(["static/chunks/22379_btw709h.js"].map(e=>n.l(e))).then(()=>e(493594)))},828805,n=>{n.v(e=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(e=>n.l(e))).then(()=>e(879466)))}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58529],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},21754:(e,t,n)=>{"use strict";n.d(t,{z:()=>r});var l=n(6029),s=n(55729),a=n(19577),o=n(4349),i=n(50806);let d=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r={type:"code",component:function(){let[e,t]=function(e){let[t,n]=(0,s.useState)(new Set(e.defaultSelection||[]));(0,i.C)(()=>{e.resetSelectionOnDataChange&&n(new Set)},[e.data,e.resetSelectionOnDataChange]);let l=(0,s.useCallback)(e=>{n(t=>{if(!t.has(e)){let n=new Set(t);return n.add(e),n}return t})},[]),a=(0,s.useCallback)(e=>{n(t=>{if(t.has(e)){let n=new Set(t);return n.delete(e),n}return t})},[]),o=(0,s.useCallback)(e=>{n(t=>{let n=new Set(t);return t.has(e)?n.delete(e):n.add(e),n})},[]),d=(0,s.useCallback)(()=>{n(new Set)},[]),r=(0,s.useCallback)(e=>{n(new Set(e))},[]),c=(0,s.useCallback)(()=>0!==e.data.length&&e.data.every(e=>t.has(e)),[t,e.data]),h=(0,s.useCallback)(()=>e.data.some(e=>t.has(e)),[t,e.data]);return[Array.from(t),{select:l,deselect:a,toggle:o,isAllSelected:c,isSomeSelected:h,setSelection:r,resetSelection:d}]}({data:(0,s.useMemo)(()=>d.map(e=>e.position),[d]),defaultSelection:[39,56]}),n=d.map(n=>{let s=e.includes(n.position);return(0,l.jsxs)(a.X.Tr,{bg:s?"var(--mantine-color-blue-light)":void 0,children:[(0,l.jsx)(a.X.Td,{children:(0,l.jsx)(o.S,{"aria-label":"Select row",checked:s,onChange:e=>{e.target.checked?t.select(n.position):t.deselect(n.position)}})}),(0,l.jsx)(a.X.Td,{children:n.position}),(0,l.jsx)(a.X.Td,{children:n.name}),(0,l.jsx)(a.X.Td,{children:n.symbol}),(0,l.jsx)(a.X.Td,{children:n.mass})]},n.name)});return(0,l.jsxs)(a.X,{children:[(0,l.jsx)(a.X.Thead,{children:(0,l.jsxs)(a.X.Tr,{children:[(0,l.jsx)(a.X.Th,{children:(0,l.jsx)(o.S,{"aria-label":"Select deselect all rows",indeterminate:t.isSomeSelected(),checked:t.isAllSelected(),onChange:()=>{t.isAllSelected()?t.resetSelection():t.setSelection(d.map(e=>e.position))}})}),(0,l.jsx)(a.X.Th,{children:"Element position"}),(0,l.jsx)(a.X.Th,{children:"Element name"}),(0,l.jsx)(a.X.Th,{children:"Symbol"}),(0,l.jsx)(a.X.Th,{children:"Atomic mass"})]})}),(0,l.jsx)(a.X.Tbody,{children:n})]})},code:`
import { Checkbox, Table } from '@mantine/core';
import { useSelection } from '@mantine/hooks';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const positions = useMemo(() => elements.map((element) => element.position), [elements]);

  const [selection, handlers] = useSelection({
    data: positions,
    defaultSelection: [39, 56],
  });

  const rows = elements.map((element) => {
    const isSelected = selection.includes(element.position);
    return (
      <Table.Tr key={element.name} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={isSelected}
            onChange={(event) => {
              if (event.target.checked) {
                handlers.select(element.position);
              } else {
                handlers.deselect(element.position);
              }
            }}
          />
        </Table.Td>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select deselect all rows"
              indeterminate={handlers.isSomeSelected()}
              checked={handlers.isAllSelected()}
              onChange={() => {
                if (handlers.isAllSelected()) {
                  handlers.resetSelection();
                } else {
                  handlers.setSelection(elements.map((el) => el.position));
                }
              }}
            />
          </Table.Th>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},64086:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var l=n(6029),s=n(16285),a=n(21754),o=n(38547),i=n(5262);let d=(0,o.P)(i.XZ.useSelection);function r(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:a.z}),"\n",(0,l.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"export interface UseSelectionInput<T> {\n  /** The array of items to select from */\n  data: T[];\n\n  /** The initial selection, empty array by default */\n  defaultSelection?: T[];\n\n  /** If true, selection is reset when data changes */\n  resetSelectionOnDataChange?: boolean;\n}\n\nexport interface UseSelectionHandlers<T> {\n  /** Add an item to the selection */\n  select: (selected: T) => void;\n\n  /** Remove an item from the selection */\n  deselect: (deselected: T) => void;\n\n  /** Toggle an item's selection state */\n  toggle: (toggled: T) => void;\n\n  /** Returns true if all items from the `data` are selected */\n  isAllSelected: () => boolean;\n\n  /** Returns true if at least one item from the `data` is selected */\n  isSomeSelected: () => boolean;\n\n  /** Set the selection to a specific array of items */\n  setSelection: (selection: T[]) => void;\n\n  /** Clear all selections */\n  resetSelection: () => void;\n}\n\nexport type UseSelectionReturnValue<T> = readonly [T[], UseSelectionHandlers<T>];\n\nfunction useSelection<T>(input: UseSelectionInput<T>): UseSelectionReturnValue<T>\n"})}),"\n",(0,l.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"UseSelectionInput"}),", ",(0,l.jsx)(t.code,{children:"UseSelectionReturnValue"})," and ",(0,l.jsx)(t.code,{children:"UseSelectionHandlers"})," types are exported from ",(0,l.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import type { UseSelectionInput, UseSelectionReturnValue, UseSelectionHandlers } from '@mantine/hooks';\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(d,{...e,children:(0,l.jsx)(r,{...e})})}},65285:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-selection",function(){return n(64086)}])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let l=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=65285)),_N_E=e.O()}]);
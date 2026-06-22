(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let l={};for(var s in e)t(l,s,{get:e[s],enumerable:!0});return n||t(l,Symbol.toStringTag,{value:"Module"}),l}])},322920,e=>{"use strict";var t=e.i(648863),n=e.i(191788),l=e.i(37541),s=e.i(245745),a=e.i(391398),o=e.i(729262);let i=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r={type:"code",component:function(){let[e,t]=function(e){let[t,l]=(0,n.useState)(new Set(e.defaultSelection||[]));(0,o.useDidUpdate)(()=>{e.resetSelectionOnDataChange&&l(new Set)},[e.data,e.resetSelectionOnDataChange]);let s=(0,n.useCallback)(e=>{l(t=>{if(!t.has(e)){let n=new Set(t);return n.add(e),n}return t})},[]),a=(0,n.useCallback)(e=>{l(t=>{if(t.has(e)){let n=new Set(t);return n.delete(e),n}return t})},[]),i=(0,n.useCallback)(e=>{l(t=>{let n=new Set(t);return t.has(e)?n.delete(e):n.add(e),n})},[]),r=(0,n.useCallback)(()=>{l(new Set)},[]),c=(0,n.useCallback)(e=>{l(new Set(e))},[]),d=(0,n.useCallback)(()=>0!==e.data.length&&e.data.every(e=>t.has(e)),[t,e.data]),m=(0,n.useCallback)(()=>e.data.some(e=>t.has(e)),[t,e.data]);return[Array.from(t),{select:s,deselect:a,toggle:i,isAllSelected:d,isSomeSelected:m,setSelection:c,resetSelection:r}]}({data:(0,n.useMemo)(()=>i.map(e=>e.position),[i]),defaultSelection:[39,56]}),r=i.map(n=>{let o=e.includes(n.position);return(0,a.jsxs)(s.Table.Tr,{bg:o?"var(--mantine-color-blue-light)":void 0,children:[(0,a.jsx)(s.Table.Td,{children:(0,a.jsx)(l.Checkbox,{"aria-label":"Select row",checked:o,onChange:e=>{e.target.checked?t.select(n.position):t.deselect(n.position)}})}),(0,a.jsx)(s.Table.Td,{children:n.position}),(0,a.jsx)(s.Table.Td,{children:n.name}),(0,a.jsx)(s.Table.Td,{children:n.symbol}),(0,a.jsx)(s.Table.Td,{children:n.mass})]},n.name)});return(0,a.jsxs)(s.Table,{children:[(0,a.jsx)(s.Table.Thead,{children:(0,a.jsxs)(s.Table.Tr,{children:[(0,a.jsx)(s.Table.Th,{children:(0,a.jsx)(l.Checkbox,{"aria-label":"Select deselect all rows",indeterminate:t.isSomeSelected(),checked:t.isAllSelected(),onChange:()=>{t.isAllSelected()?t.resetSelection():t.setSelection(i.map(e=>e.position))}})}),(0,a.jsx)(s.Table.Th,{children:"Element position"}),(0,a.jsx)(s.Table.Th,{children:"Element name"}),(0,a.jsx)(s.Table.Th,{children:"Symbol"}),(0,a.jsx)(s.Table.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(s.Table.Tbody,{children:r})]})},code:`
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
`};var c=(0,t.__exportAll)({usage:()=>r});e.s(["UseSelectionDemos",0,c],322920)},363674,e=>{"use strict";var t=e.i(391398),n=e.i(38856),l=e.i(322920);e.i(603441);var s=e.i(62558);e.i(457450);var a=e.i(418026);let o=(0,s.Layout)(a.MDX_DATA.useSelection);function i(e){let s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:a}=s;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:l.UseSelectionDemos.usage}),"\n",(0,t.jsx)(s.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"export interface UseSelectionInput<T> {\n  /** The array of items to select from */\n  data: T[];\n\n  /** The initial selection, empty array by default */\n  defaultSelection?: T[];\n\n  /** If true, selection is reset when data changes */\n  resetSelectionOnDataChange?: boolean;\n}\n\nexport interface UseSelectionHandlers<T> {\n  /** Add an item to the selection */\n  select: (selected: T) => void;\n\n  /** Remove an item from the selection */\n  deselect: (deselected: T) => void;\n\n  /** Toggle an item's selection state */\n  toggle: (toggled: T) => void;\n\n  /** Returns true if all items from the `data` are selected */\n  isAllSelected: () => boolean;\n\n  /** Returns true if at least one item from the `data` is selected */\n  isSomeSelected: () => boolean;\n\n  /** Set the selection to a specific array of items */\n  setSelection: (selection: T[]) => void;\n\n  /** Clear all selections */\n  resetSelection: () => void;\n}\n\nexport type UseSelectionReturnValue<T> = readonly [T[], UseSelectionHandlers<T>];\n\nfunction useSelection<T>(input: UseSelectionInput<T>): UseSelectionReturnValue<T>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"UseSelectionInput"}),", ",(0,t.jsx)(s.code,{children:"UseSelectionReturnValue"})," and ",(0,t.jsx)(s.code,{children:"UseSelectionHandlers"})," types are exported from the ",(0,t.jsx)(s.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import type { UseSelectionInput, UseSelectionReturnValue, UseSelectionHandlers } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(i,{...e})})}])},8990,(e,t,n)=>{let l="/hooks/use-selection";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(363674)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);
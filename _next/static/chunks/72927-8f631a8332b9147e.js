"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72927],{1798:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},24583:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},37698:(e,l,a)=>{a.d(l,{P:()=>y});var t=a(6029),n=a(55729),o=a(5322),r=a(28136),d=a(14163),s=a(33987),u=a(38919),c=a(15583),i=a(76320),v=a(8411),h=a(97153);function p(e,l,a){if(!e||!l)return[];let t=a.indexOf(e),n=a.indexOf(l),o=Math.min(t,n),r=Math.max(t,n);return a.slice(o,r+1)}function m({node:e,getStyles:l,rootIndex:a,controller:o,expandOnClick:r,selectOnClick:d,isSubtree:s,level:u=1,renderNode:c,flatValues:v,allowRangeSelection:k,expandOnSpace:g,checkOnSpace:f}){let b=(0,n.useRef)(null),y=(e.children||[]).map(e=>(0,t.jsx)(m,{node:e,flatValues:v,getStyles:l,rootIndex:void 0,level:u+1,controller:o,expandOnClick:r,isSubtree:!0,renderNode:c,selectOnClick:d,allowRangeSelection:k,expandOnSpace:g,checkOnSpace:f},e.value)),x=o.selectedState.includes(e.value),A={...l("label"),onClick:l=>{l.stopPropagation(),k&&l.shiftKey&&o.anchorNode?o.setSelectedState(p(o.anchorNode,e.value,v)):(r&&o.toggleExpanded(e.value),d&&o.select(e.value)),b.current?.focus()},"data-selected":x||void 0,"data-value":e.value,"data-hovered":o.hoveredNode===e.value||void 0};return(0,t.jsxs)("li",{...l("node",{style:{"--label-offset":`calc(var(--level-offset) * ${u-1})`}}),role:"treeitem","aria-selected":x,"data-value":e.value,"data-selected":x||void 0,"data-hovered":o.hoveredNode===e.value||void 0,"data-level":u,tabIndex:0===a?0:-1,onKeyDown:l=>{if("ArrowRight"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),o.expandedState[e.value]?l.currentTarget.querySelector("[role=treeitem]")?.focus():o.expand(e.value)),"ArrowLeft"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),o.expandedState[e.value]&&(e.children||[]).length>0?o.collapse(e.value):s&&(0,h.P)(l.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===l.nativeEvent.code||"ArrowUp"===l.nativeEvent.code){let e=(0,h.P)(l.currentTarget,"[data-tree-root]");if(!e)return;l.stopPropagation(),l.preventDefault();let a=Array.from(e.querySelectorAll("[role=treeitem]")),t=a.indexOf(l.currentTarget);if(-1===t)return;let n="ArrowDown"===l.nativeEvent.code?t+1:t-1;if(a[n]?.focus(),l.shiftKey){let e=a[n];e&&o.setSelectedState(p(o.anchorNode,e.dataset.value,v))}}"Space"===l.nativeEvent.code&&(g&&(l.stopPropagation(),l.preventDefault(),o.toggleExpanded(e.value)),f&&(l.stopPropagation(),l.preventDefault(),o.isNodeChecked(e.value)?o.uncheckNode(e.value):o.checkNode(e.value)))},ref:b,onMouseOver:l=>{l.stopPropagation(),o.setHoveredNode(e.value)},onMouseLeave:e=>{e.stopPropagation(),o.setHoveredNode(null)},children:["function"==typeof c?c({node:e,level:u,selected:x,tree:o,expanded:o.expandedState[e.value]||!1,hasChildren:Array.isArray(e.children)&&e.children.length>0,elementProps:A}):(0,t.jsx)("div",{...A,children:e.label}),o.expandedState[e.value]&&y.length>0&&(0,t.jsx)(i.a,{component:"ul",role:"group",...l("subtree"),"data-level":u,children:y})]})}m.displayName="@mantine/core/TreeNode";var k=a(76190),g={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"};let f={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},b=(0,s.V)((e,{levelOffset:l})=>({root:{"--level-offset":(0,d.GY)(l)}})),y=(0,v.P9)((e,l)=>{let a=(0,u.Y)("Tree",f,e),{classNames:d,className:s,style:v,styles:h,unstyled:p,vars:y,data:x,expandOnClick:A,tree:M,renderNode:_,selectOnClick:j,clearSelectionOnOutsideClick:C,allowRangeSelection:S,expandOnSpace:N,levelOffset:w,checkOnSpace:T,attributes:E,...P}=a,D=(0,k.W)(),O=M||D,I=(0,c.I)({name:"Tree",classes:g,props:a,className:s,style:v,classNames:d,styles:h,unstyled:p,attributes:E,vars:y,varsResolver:b}),L=(0,o.L)(()=>C&&O.clearSelected()),B=(0,r.pc)(l,L),R=(0,n.useMemo)(()=>(function e(l){return l.reduce((l,a)=>(l.push(a.value),a.children&&l.push(...e(a.children)),l),[])})(x),[x]);(0,n.useEffect)(()=>{O.initialize(x)},[x]);let z=x.map((e,l)=>(0,t.jsx)(m,{node:e,getStyles:I,rootIndex:l,expandOnClick:A,selectOnClick:j,controller:O,renderNode:_,flatValues:R,allowRangeSelection:S,expandOnSpace:N,checkOnSpace:T},e.value));return(0,t.jsx)(i.a,{component:"ul",ref:B,...I("root"),...P,role:"tree","aria-multiselectable":O.multiple,"data-tree-root":!0,children:z})});y.displayName="@mantine/core/Tree",y.classes=g},41949:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},63286:(e,l,a)=>{a.d(l,{k:()=>n,p:()=>t});let t=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],n=`import { TreeNodeData } from '@mantine/core';

export const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' },
        ],
      },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          {
            label: 'core',
            value: 'node_modules/@mantine/core',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@mantine/core/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@mantine/core/package.json' },
            ],
          },
          {
            label: 'hooks',
            value: 'node_modules/@mantine/hooks',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@mantine/hooks/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@mantine/hooks/package.json' },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@mantine/form',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@mantine/form/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@mantine/form/package.json' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
  },
];`},65433:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},76190:(e,l,a)=>{a.d(l,{x:()=>c,W:()=>i});var t=a(55729);function n(e,l,a=[]){let t=[];for(let o of e)if(Array.isArray(o.children)&&o.children.length>0){let e=n(o.children,l,a);if(e.currentTreeChecked.length===o.children.length){let l=e.currentTreeChecked.every(e=>e.checked),n={checked:l,indeterminate:!l,value:o.value,hasChildren:!0};t.push(n),a.push(n)}else if(e.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:o.value,hasChildren:!0};t.push(e),a.push(e)}}else if(l.includes(o.value)){let e={checked:!0,indeterminate:!1,value:o.value,hasChildren:!1};t.push(e),a.push(e)}return{result:a,currentTreeChecked:t}}function o(e,l,a=[]){let t=function e(l,a){for(let t of a){if(t.value===l)return t;if(Array.isArray(t.children)){let a=e(l,t.children);if(a)return a}}return null}(e,l);return t?Array.isArray(t.children)&&0!==t.children.length?(t.children.forEach(e=>{Array.isArray(e.children)&&e.children.length>0?o(e.value,l,a):a.push(e.value)}),a):[t.value]:a}function r(e){let l=new Map;return(...a)=>{let t=JSON.stringify(a);if(l.has(t))return l.get(t);let n=e(...a);return l.set(t,n),n}}a(6029);let d=r(function(e,l,a){return 0!==a.length&&(!!a.includes(e)||n(l,a).result.some(l=>l.value===e&&l.checked))}),s=r(function(e,l,a){return 0!==a.length&&n(l,a).result.some(l=>l.value===e&&l.indeterminate)});function u(e,l,a,t={}){return l.forEach(l=>{t[l.value]=l.value in e?e[l.value]:l.value===a,Array.isArray(l.children)&&u(e,l.children,a,t)}),t}function c(e,l){let a=u({},e,[]);return"*"===l?Object.keys(a).reduce((e,l)=>({...e,[l]:!0}),{}):(l.forEach(e=>{a[e]=!0}),a)}function i({initialSelectedState:e=[],initialCheckedState:l=[],initialExpandedState:a={},multiple:r=!1,onNodeCollapse:c,onNodeExpand:v}={}){let[h,p]=(0,t.useState)([]),[m,k]=(0,t.useState)(a),[g,f]=(0,t.useState)(e),[b,y]=(0,t.useState)(l),[x,A]=(0,t.useState)(null),[M,_]=(0,t.useState)(null),j=(0,t.useCallback)(e=>{k(l=>u(l,e,g)),y(l=>(function(e,l){let a=[];return e.forEach(e=>a.push(...o(e,l))),Array.from(new Set(a))})(l,e)),p(e)},[g,b]),C=(0,t.useCallback)(e=>{k(l=>{let a={...l,[e]:!l[e]};return a[e]?v?.(e):c?.(e),a})},[c,v]),S=(0,t.useCallback)(e=>{k(l=>(!1!==l[e]&&c?.(e),{...l,[e]:!1}))},[c]),N=(0,t.useCallback)(e=>{k(l=>(!0!==l[e]&&v?.(e),{...l,[e]:!0}))},[v]),w=(0,t.useCallback)(()=>{k(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!0}),l})},[]),T=(0,t.useCallback)(()=>{k(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!1}),l})},[]),E=(0,t.useCallback)(e=>f(l=>r?l.includes(e)?(A(null),l.filter(l=>l!==e)):(A(e),[...l,e]):l.includes(e)?(A(null),[]):(A(e),[e])),[]),P=(0,t.useCallback)(e=>{A(e),f(l=>r?l.includes(e)?l:[...l,e]:[e])},[]),D=(0,t.useCallback)(e=>{x===e&&A(null),f(l=>l.filter(l=>l!==e))},[]),O=(0,t.useCallback)(()=>{f([]),A(null)},[]),I=(0,t.useCallback)(e=>{let l=o(e,h);y(e=>Array.from(new Set([...e,...l])))},[h]),L=(0,t.useCallback)(e=>{let l=o(e,h);y(e=>e.filter(e=>!l.includes(e)))},[h]),B=(0,t.useCallback)(()=>{y(()=>(function e(l){return l.reduce((l,a)=>(Array.isArray(a.children)&&a.children.length>0?l.push(...e(a.children)):l.push(a.value),l),[])})(h))},[h]);return{multiple:r,expandedState:m,selectedState:g,checkedState:b,anchorNode:x,initialize:j,toggleExpanded:C,collapse:S,expand:N,expandAllNodes:w,collapseAllNodes:T,setExpandedState:k,checkNode:I,uncheckNode:L,checkAllNodes:B,uncheckAllNodes:(0,t.useCallback)(()=>{y([])},[]),setCheckedState:y,toggleSelected:E,select:P,deselect:D,clearSelected:O,setSelectedState:f,hoveredNode:M,setHoveredNode:_,getCheckedNodes:()=>n(h,b).result,isNodeChecked:e=>d(e,h,b),isNodeIndeterminate:e=>s(e,h,b)}}},84276:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,l,a)=>{a.d(l,{A:()=>t});let t=(0,a(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}}]);
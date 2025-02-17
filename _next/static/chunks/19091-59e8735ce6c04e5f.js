"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19091],{41507:(e,l,a)=>{a.d(l,{k:()=>t,p:()=>n});let n=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],t=`import { TreeNodeData } from '@mantine/core';

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
];`},70781:(e,l,a)=>{a.d(l,{P:()=>x});var n=a(31085),t=a(14041),r=a(63151),o=a(34321),d=a(33450),u=a(7098),s=a(29686),c=a(69564),i=a(34056),v=a(6754),h=a(93996);function m(e,l,a){if(!e||!l)return[];let n=a.indexOf(e),t=a.indexOf(l),r=Math.min(n,t),o=Math.max(n,t);return a.slice(r,o+1)}function p({node:e,getStyles:l,rootIndex:a,controller:r,expandOnClick:o,selectOnClick:d,isSubtree:u,level:s=1,renderNode:c,flatValues:i,allowRangeSelection:v,expandOnSpace:f,checkOnSpace:b}){let k=(0,t.useRef)(null),g=(e.children||[]).map(e=>(0,n.jsx)(p,{node:e,flatValues:i,getStyles:l,rootIndex:void 0,level:s+1,controller:r,expandOnClick:o,isSubtree:!0,renderNode:c,selectOnClick:d,allowRangeSelection:v,expandOnSpace:f,checkOnSpace:b},e.value)),x=r.selectedState.includes(e.value),_={...l("label"),onClick:l=>{l.stopPropagation(),v&&l.shiftKey&&r.anchorNode?r.setSelectedState(m(r.anchorNode,e.value,i)):(o&&r.toggleExpanded(e.value),d&&r.select(e.value)),k.current?.focus()},"data-selected":x||void 0,"data-value":e.value,"data-hovered":r.hoveredNode===e.value||void 0};return(0,n.jsxs)("li",{...l("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s-1})`}}),role:"treeitem","aria-selected":x,"data-value":e.value,"data-selected":x||void 0,"data-hovered":r.hoveredNode===e.value||void 0,"data-level":s,tabIndex:0===a?0:-1,onKeyDown:l=>{if("ArrowRight"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),r.expandedState[e.value]?l.currentTarget.querySelector("[role=treeitem]")?.focus():r.expand(e.value)),"ArrowLeft"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),r.expandedState[e.value]&&(e.children||[]).length>0?r.collapse(e.value):u&&h.P(l.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===l.nativeEvent.code||"ArrowUp"===l.nativeEvent.code){let e=(0,h.P)(l.currentTarget,"[data-tree-root]");if(!e)return;l.stopPropagation(),l.preventDefault();let a=Array.from(e.querySelectorAll("[role=treeitem]")),n=a.indexOf(l.currentTarget);if(-1===n)return;let t="ArrowDown"===l.nativeEvent.code?n+1:n-1;if(a[t]?.focus(),l.shiftKey){let e=a[t];e&&r.setSelectedState(m(r.anchorNode,e.dataset.value,i))}}"Space"===l.nativeEvent.code&&(f&&(l.stopPropagation(),l.preventDefault(),r.toggleExpanded(e.value)),b&&(l.stopPropagation(),l.preventDefault(),r.isNodeChecked(e.value)?r.uncheckNode(e.value):r.checkNode(e.value)))},ref:k,onMouseOver:l=>{l.stopPropagation(),r.setHoveredNode(e.value)},onMouseLeave:e=>{e.stopPropagation(),r.setHoveredNode(null)},children:["function"==typeof c?c({node:e,level:s,selected:x,tree:r,expanded:r.expandedState[e.value]||!1,hasChildren:Array.isArray(e.children)&&e.children.length>0,elementProps:_}):(0,n.jsx)("div",{..._,children:e.label}),r.expandedState[e.value]&&g.length>0&&(0,n.jsx)("ul",{role:"group",...l("subtree"),"data-level":s,children:g})]})}p.displayName="@mantine/core/TreeNode";var f=a(260),b={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"};let k={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},g=(0,u.V)((e,{levelOffset:l})=>({root:{"--level-offset":(0,d.GY)(l)}})),x=(0,v.P9)((e,l)=>{let a=(0,s.Y)("Tree",k,e),{classNames:d,className:u,style:v,styles:h,unstyled:m,vars:x,data:_,expandOnClick:j,tree:y,renderNode:A,selectOnClick:C,clearSelectionOnOutsideClick:S,allowRangeSelection:N,expandOnSpace:E,levelOffset:T,checkOnSpace:w,...P}=a,D=(0,f.W)(),O=y||D,M=(0,c.I)({name:"Tree",classes:b,props:a,className:u,style:v,classNames:d,styles:h,unstyled:m,vars:x,varsResolver:g}),I=(0,r.L)(()=>S&&O.clearSelected()),B=(0,o.pc)(l,I),K=(0,t.useMemo)(()=>(function e(l){return l.reduce((l,a)=>(l.push(a.value),a.children&&l.push(...e(a.children)),l),[])})(_),[_]);(0,t.useEffect)(()=>{O.initialize(_)},[_]);let L=_.map((e,l)=>(0,n.jsx)(p,{node:e,getStyles:M,rootIndex:l,expandOnClick:j,selectOnClick:C,controller:O,renderNode:A,flatValues:K,allowRangeSelection:N,expandOnSpace:E,checkOnSpace:w},e.value));return(0,n.jsx)(i.a,{component:"ul",ref:B,...M("root"),...P,role:"tree","aria-multiselectable":O.multiple,"data-tree-root":!0,children:L})});x.displayName="@mantine/core/Tree",x.classes=b},260:(e,l,a)=>{a.d(l,{x:()=>c,W:()=>i});var n=a(14041);function t(e,l,a=[]){let n=[];for(let r of e)if(Array.isArray(r.children)&&r.children.length>0){let e=t(r.children,l,a);if(e.currentTreeChecked.length===r.children.length){let l=e.currentTreeChecked.every(e=>e.checked),t={checked:l,indeterminate:!l,value:r.value,hasChildren:!0};n.push(t),a.push(t)}else if(e.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:r.value,hasChildren:!0};n.push(e),a.push(e)}}else if(l.includes(r.value)){let e={checked:!0,indeterminate:!1,value:r.value,hasChildren:!1};n.push(e),a.push(e)}return{result:a,currentTreeChecked:n}}function r(e,l,a=[]){let n=function e(l,a){for(let n of a){if(n.value===l)return n;if(Array.isArray(n.children)){let a=e(l,n.children);if(a)return a}}return null}(e,l);return n?Array.isArray(n.children)&&0!==n.children.length?(n.children.forEach(e=>{Array.isArray(e.children)&&e.children.length>0?r(e.value,l,a):a.push(e.value)}),a):[n.value]:a}function o(e){let l=new Map;return(...a)=>{let n=JSON.stringify(a);if(l.has(n))return l.get(n);let t=e(...a);return l.set(n,t),t}}a(31085);let d=o(function(e,l,a){return 0!==a.length&&(!!a.includes(e)||t(l,a).result.some(l=>l.value===e&&l.checked))}),u=o(function(e,l,a){return 0!==a.length&&t(l,a).result.some(l=>l.value===e&&l.indeterminate)});function s(e,l,a,n={}){return l.forEach(l=>{n[l.value]=l.value in e?e[l.value]:l.value===a,Array.isArray(l.children)&&s(e,l.children,a,n)}),n}function c(e,l){let a=s({},e,[]);return"*"===l?Object.keys(a).reduce((e,l)=>({...e,[l]:!0}),{}):(l.forEach(e=>{a[e]=!0}),a)}function i({initialSelectedState:e=[],initialCheckedState:l=[],initialExpandedState:a={},multiple:o=!1,onNodeCollapse:c,onNodeExpand:v}={}){let[h,m]=(0,n.useState)([]),[p,f]=(0,n.useState)(a),[b,k]=(0,n.useState)(e),[g,x]=(0,n.useState)(l),[_,j]=(0,n.useState)(null),[y,A]=(0,n.useState)(null),C=(0,n.useCallback)(e=>{f(l=>s(l,e,b)),x(l=>(function(e,l){let a=[];return e.forEach(e=>a.push(...r(e,l))),Array.from(new Set(a))})(l,e)),m(e)},[b,g]),S=(0,n.useCallback)(e=>{f(l=>{let a={...l,[e]:!l[e]};return a[e]?v?.(e):c?.(e),a})},[c,v]),N=(0,n.useCallback)(e=>{f(l=>(!1!==l[e]&&c?.(e),{...l,[e]:!1}))},[c]),E=(0,n.useCallback)(e=>{f(l=>(!0!==l[e]&&v?.(e),{...l,[e]:!0}))},[v]),T=(0,n.useCallback)(()=>{f(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!0}),l})},[]),w=(0,n.useCallback)(()=>{f(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!1}),l})},[]),P=(0,n.useCallback)(e=>k(l=>o?l.includes(e)?(j(null),l.filter(l=>l!==e)):(j(e),[...l,e]):l.includes(e)?(j(null),[]):(j(e),[e])),[]),D=(0,n.useCallback)(e=>{j(e),k(l=>o?l.includes(e)?l:[...l,e]:[e])},[]),O=(0,n.useCallback)(e=>{_===e&&j(null),k(l=>l.filter(l=>l!==e))},[]),M=(0,n.useCallback)(()=>{k([]),j(null)},[]),I=(0,n.useCallback)(e=>{let l=r(e,h);x(e=>Array.from(new Set([...e,...l])))},[h]),B=(0,n.useCallback)(e=>{let l=r(e,h);x(e=>e.filter(e=>!l.includes(e)))},[h]);return{multiple:o,expandedState:p,selectedState:b,checkedState:g,anchorNode:_,initialize:C,toggleExpanded:S,collapse:N,expand:E,expandAllNodes:T,collapseAllNodes:w,setExpandedState:f,checkNode:I,uncheckNode:B,checkAllNodes:(0,n.useCallback)(()=>{x(()=>(function e(l){return l.reduce((l,a)=>(Array.isArray(a.children)&&a.children.length>0?l.push(...e(a.children)):l.push(a.value),l),[])})(h))},[h]),uncheckAllNodes:(0,n.useCallback)(()=>{x([])},[]),setCheckedState:x,toggleSelected:P,select:D,deselect:O,clearSelected:M,setSelectedState:k,hoveredNode:y,setHoveredNode:A,getCheckedNodes:()=>t(h,g).result,isNodeChecked:e=>d(e,h,g),isNodeIndeterminate:e=>u(e,h,g)}}}}]);
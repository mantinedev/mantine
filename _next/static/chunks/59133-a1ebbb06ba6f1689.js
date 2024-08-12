"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59133],{76947:function(e,l,n){n.d(l,{a:function(){return a},o:function(){return t}});let a=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],t=`import { TreeNodeData } from '@mantine/core';

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
              { label: 'index.d.ts', value: 'node_modules/@mantine/core/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@mantine/core/package.json' },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@mantine/form',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@mantine/core/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@mantine/core/package.json' },
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
];`},15601:function(e,l,n){n.d(l,{m:function(){return x}});var a=n(52322),t=n(2784),o=n(33303),r=n(70837),d=n(91482),u=n(11200),s=n(38483),c=n(46690),i=n(28559),v=n(82027),h=n(73491);function m(e,l,n){if(!e||!l)return[];let a=n.indexOf(e),t=n.indexOf(l);return n.slice(Math.min(a,t),Math.max(a,t)+1)}function f({node:e,getStyles:l,rootIndex:n,controller:o,expandOnClick:r,selectOnClick:d,isSubtree:u,level:s=1,renderNode:c,flatValues:i,allowRangeSelection:v,expandOnSpace:p}){let b=(0,t.useRef)(null),k=(e.children||[]).map(e=>(0,a.jsx)(f,{node:e,flatValues:i,getStyles:l,rootIndex:void 0,level:s+1,controller:o,expandOnClick:r,isSubtree:!0,renderNode:c,selectOnClick:d,allowRangeSelection:v,expandOnSpace:p},e.value)),g=o.selectedState.includes(e.value),x={...l("label"),onClick:l=>{l.stopPropagation(),v&&l.shiftKey&&o.anchorNode?o.setSelectedState(m(o.anchorNode,e.value,i)):(r&&o.toggleExpanded(e.value),d&&o.select(e.value)),b.current?.focus()},"data-selected":g||void 0,"data-value":e.value,"data-hovered":o.hoveredNode===e.value||void 0};return(0,a.jsxs)("li",{...l("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s-1})`}}),role:"treeitem","aria-selected":g,"data-value":e.value,"data-selected":g||void 0,"data-hovered":o.hoveredNode===e.value||void 0,"data-level":s,tabIndex:0===n?0:-1,onKeyDown:l=>{if("ArrowRight"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),o.expandedState[e.value]?l.currentTarget.querySelector("[role=treeitem]")?.focus():o.expand(e.value)),"ArrowLeft"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),o.expandedState[e.value]&&(e.children||[]).length>0?o.collapse(e.value):u&&h.p(l.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===l.nativeEvent.code||"ArrowUp"===l.nativeEvent.code){let e=(0,h.p)(l.currentTarget,"[data-tree-root]");if(!e)return;l.stopPropagation(),l.preventDefault();let n=Array.from(e.querySelectorAll("[role=treeitem]")),a=n.indexOf(l.currentTarget);if(-1===a)return;let t="ArrowDown"===l.nativeEvent.code?a+1:a-1;if(n[t]?.focus(),l.shiftKey){let e=n[t];e&&o.setSelectedState(m(o.anchorNode,e.dataset.value,i))}}"Space"===l.nativeEvent.code&&p&&(l.stopPropagation(),l.preventDefault(),o.toggleExpanded(e.value))},ref:b,onMouseOver:l=>{l.stopPropagation(),o.setHoveredNode(e.value)},onMouseLeave:e=>{e.stopPropagation(),o.setHoveredNode(null)},children:["function"==typeof c?c({node:e,level:s,selected:g,tree:o,expanded:o.expandedState[e.value]||!1,hasChildren:Array.isArray(e.children)&&e.children.length>0,elementProps:x}):(0,a.jsx)("div",{...x,children:e.label}),o.expandedState[e.value]&&k.length>0&&(0,a.jsx)("ul",{role:"group",...l("subtree"),"data-level":s,children:k})]})}f.displayName="@mantine/core/TreeNode";var p=n(98781),b={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"};let k={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},g=(0,u.Z)((e,{levelOffset:l})=>({root:{"--level-offset":(0,d.bG)(l)}})),x=(0,v.d5)((e,l)=>{let n=(0,s.w)("Tree",k,e),{classNames:d,className:u,style:v,styles:h,unstyled:m,vars:x,data:_,expandOnClick:j,tree:y,renderNode:C,selectOnClick:A,clearSelectionOnOutsideClick:S,allowRangeSelection:N,expandOnSpace:T,levelOffset:E,...w}=n,O=(0,p.Z)(),D=y||O,P=(0,c.y)({name:"Tree",classes:b,props:n,className:u,style:v,classNames:d,styles:h,unstyled:m,vars:x,varsResolver:g}),M=(0,o.O)(()=>S&&D.clearSelected()),B=(0,r.Yx)(l,M),I=(0,t.useMemo)(()=>(function e(l){return l.reduce((l,n)=>(l.push(n.value),n.children&&l.push(...e(n.children)),l),[])})(_),[_]);(0,t.useEffect)(()=>{D.initialize(_)},[_]);let K=_.map((e,l)=>(0,a.jsx)(f,{node:e,getStyles:P,rootIndex:l,expandOnClick:j,selectOnClick:A,controller:D,renderNode:C,flatValues:I,allowRangeSelection:N,expandOnSpace:T},e.value));return(0,a.jsx)(i.x,{component:"ul",ref:B,...P("root"),...w,role:"tree","aria-multiselectable":D.multiple,"data-tree-root":!0,children:K})});x.displayName="@mantine/core/Tree",x.classes=b},98781:function(e,l,n){n.d(l,{Z:function(){return s}});var a=n(2784);function t(e,l,n=[]){let a=[];for(let o of e)if(Array.isArray(o.children)&&o.children.length>0){let e=t(o.children,l,n);if(e.currentTreeChecked.length===o.children.length){let l=e.currentTreeChecked.every(e=>e.checked),t={checked:l,indeterminate:!l,value:o.value,hasChildren:!0};a.push(t),n.push(t)}else if(e.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:o.value,hasChildren:!0};a.push(e),n.push(e)}}else if(l.includes(o.value)){let e={checked:!0,indeterminate:!1,value:o.value,hasChildren:!1};a.push(e),n.push(e)}return{result:n,currentTreeChecked:a}}function o(e,l,n=[]){let a=function e(l,n){for(let a of n){if(a.value===l)return a;if(Array.isArray(a.children)){let n=e(l,a.children);if(n)return n}}return null}(e,l);return a?Array.isArray(a.children)&&0!==a.children.length?(a.children.forEach(e=>{Array.isArray(e.children)&&e.children.length>0?o(e.value,l,n):n.push(e.value)}),n):[a.value]:n}function r(e){let l=new Map;return(...n)=>{let a=JSON.stringify(n);if(l.has(a))return l.get(a);let t=e(...n);return l.set(a,t),t}}n(52322);let d=r(function(e,l,n){return 0!==n.length&&(!!n.includes(e)||t(l,n).result.some(l=>l.value===e&&l.checked))}),u=r(function(e,l,n){return 0!==n.length&&t(l,n).result.some(l=>l.value===e&&l.indeterminate)});function s({initialSelectedState:e=[],initialExpandedState:l={},multiple:n=!1}={}){let[r,s]=(0,a.useState)([]),[c,i]=(0,a.useState)(l),[v,h]=(0,a.useState)(e),[m,f]=(0,a.useState)([]),[p,b]=(0,a.useState)(null),[k,g]=(0,a.useState)(null),x=(0,a.useCallback)(e=>{i(l=>(function e(l,n,a,t={}){return n.forEach(n=>{t[n.value]=n.value in l?l[n.value]:n.value===a,Array.isArray(n.children)&&e(l,n.children,a,t)}),t})(l,e,v)),s(e)},[v]),_=(0,a.useCallback)(e=>{i(l=>({...l,[e]:!l[e]}))},[]),j=(0,a.useCallback)(e=>{i(l=>({...l,[e]:!1}))},[]),y=(0,a.useCallback)(e=>{i(l=>({...l,[e]:!0}))},[]),C=(0,a.useCallback)(()=>{i(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!0}),l})},[]),A=(0,a.useCallback)(()=>{i(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!1}),l})},[]),S=(0,a.useCallback)(e=>h(l=>n?l.includes(e)?(b(null),l.filter(l=>l!==e)):(b(e),[...l,e]):l.includes(e)?(b(null),[]):(b(e),[e])),[]),N=(0,a.useCallback)(e=>{b(e),h(l=>n?l.includes(e)?l:[...l,e]:[e])},[]),T=(0,a.useCallback)(e=>{p===e&&b(null),h(l=>l.filter(l=>l!==e))},[]),E=(0,a.useCallback)(()=>{h([]),b(null)},[]);return{multiple:n,expandedState:c,selectedState:v,checkedState:m,anchorNode:p,initialize:x,toggleExpanded:_,collapse:j,expand:y,expandAllNodes:C,collapseAllNodes:A,setExpandedState:i,checkNode:(0,a.useCallback)(e=>{let l=o(e,r);f(e=>Array.from(new Set([...e,...l])))},[r]),uncheckNode:(0,a.useCallback)(e=>{let l=o(e,r);f(e=>e.filter(e=>!l.includes(e)))},[r]),toggleSelected:S,select:N,deselect:T,clearSelected:E,setSelectedState:h,hoveredNode:k,setHoveredNode:g,getCheckedNodes:()=>t(r,m).result,isNodeChecked:e=>d(e,r,m),isNodeIndeterminate:e=>u(e,r,m)}}}}]);
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
];`},15601:function(e,l,n){n.d(l,{m:function(){return x}});var a=n(52322),t=n(2784),r=n(33303),o=n(70837),u=n(91482),d=n(11200),c=n(38483),s=n(46690),i=n(28559),v=n(82027),h=n(73491);function m(e,l,n){if(!e||!l)return[];let a=n.indexOf(e),t=n.indexOf(l);return n.slice(Math.min(a,t),Math.max(a,t)+1)}function f({node:e,getStyles:l,rootIndex:n,controller:r,expandOnClick:o,selectOnClick:u,isSubtree:d,level:c=1,renderNode:s,flatValues:i,allowRangeSelection:v,expandOnSpace:p}){let b=(0,t.useRef)(null),k=(e.children||[]).map(e=>(0,a.jsx)(f,{node:e,flatValues:i,getStyles:l,rootIndex:void 0,level:c+1,controller:r,expandOnClick:o,isSubtree:!0,renderNode:s,selectOnClick:u,allowRangeSelection:v,expandOnSpace:p},e.value)),g=r.selectedState.includes(e.value),x={...l("label"),onClick:l=>{l.stopPropagation(),v&&l.shiftKey&&r.anchorNode?r.setSelectedState(m(r.anchorNode,e.value,i)):(o&&r.toggleExpanded(e.value),u&&r.select(e.value)),b.current?.focus()},"data-selected":g||void 0,"data-value":e.value,"data-hovered":r.hoveredNode===e.value||void 0};return(0,a.jsxs)("li",{...l("node",{style:{"--label-offset":`calc(var(--level-offset) * ${c-1})`}}),role:"treeitem","aria-selected":g,"data-value":e.value,"data-selected":g||void 0,"data-hovered":r.hoveredNode===e.value||void 0,"data-level":c,tabIndex:0===n?0:-1,onKeyDown:l=>{if("ArrowRight"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),r.expandedState[e.value]?l.currentTarget.querySelector("[role=treeitem]")?.focus():r.expand(e.value)),"ArrowLeft"===l.nativeEvent.code&&(l.stopPropagation(),l.preventDefault(),r.expandedState[e.value]&&(e.children||[]).length>0?r.collapse(e.value):d&&h.p(l.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===l.nativeEvent.code||"ArrowUp"===l.nativeEvent.code){let e=(0,h.p)(l.currentTarget,"[data-tree-root]");if(!e)return;l.stopPropagation(),l.preventDefault();let n=Array.from(e.querySelectorAll("[role=treeitem]")),a=n.indexOf(l.currentTarget);if(-1===a)return;let t="ArrowDown"===l.nativeEvent.code?a+1:a-1;if(n[t]?.focus(),l.shiftKey){let e=n[t];e&&r.setSelectedState(m(r.anchorNode,e.dataset.value,i))}}"Space"===l.nativeEvent.code&&p&&(l.stopPropagation(),l.preventDefault(),r.toggleExpanded(e.value))},ref:b,onMouseOver:l=>{l.stopPropagation(),r.setHoveredNode(e.value)},onMouseLeave:e=>{e.stopPropagation(),r.setHoveredNode(null)},children:["function"==typeof s?s({node:e,level:c,selected:g,tree:r,expanded:r.expandedState[e.value]||!1,hasChildren:Array.isArray(e.children)&&e.children.length>0,elementProps:x}):(0,a.jsx)("div",{...x,children:e.label}),r.expandedState[e.value]&&k.length>0&&(0,a.jsx)("ul",{role:"group",...l("subtree"),"data-level":c,children:k})]})}f.displayName="@mantine/core/TreeNode";var p=n(98781),b={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"};let k={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},g=(0,d.Z)((e,{levelOffset:l})=>({root:{"--level-offset":(0,u.bG)(l)}})),x=(0,v.d5)((e,l)=>{let n=(0,c.w)("Tree",k,e),{classNames:u,className:d,style:v,styles:h,unstyled:m,vars:x,data:_,expandOnClick:j,tree:y,renderNode:A,selectOnClick:C,clearSelectionOnOutsideClick:S,allowRangeSelection:N,expandOnSpace:E,levelOffset:T,...w}=n,O=(0,p.Z)(),D=y||O,P=(0,s.y)({name:"Tree",classes:b,props:n,className:d,style:v,classNames:u,styles:h,unstyled:m,vars:x,varsResolver:g}),M=(0,r.O)(()=>S&&D.clearSelected()),I=(0,o.Yx)(l,M),B=(0,t.useMemo)(()=>(function e(l){return l.reduce((l,n)=>(l.push(n.value),n.children&&l.push(...e(n.children)),l),[])})(_),[_]);(0,t.useEffect)(()=>{D.initialize(_)},[_]);let K=_.map((e,l)=>(0,a.jsx)(f,{node:e,getStyles:P,rootIndex:l,expandOnClick:j,selectOnClick:C,controller:D,renderNode:A,flatValues:B,allowRangeSelection:N,expandOnSpace:E},e.value));return(0,a.jsx)(i.x,{component:"ul",ref:I,...P("root"),...w,role:"tree","aria-multiselectable":D.multiple,"data-tree-root":!0,children:K})});x.displayName="@mantine/core/Tree",x.classes=b},98781:function(e,l,n){n.d(l,{I:function(){return s},Z:function(){return i}});var a=n(2784);function t(e,l,n=[]){let a=[];for(let r of e)if(Array.isArray(r.children)&&r.children.length>0){let e=t(r.children,l,n);if(e.currentTreeChecked.length===r.children.length){let l=e.currentTreeChecked.every(e=>e.checked),t={checked:l,indeterminate:!l,value:r.value,hasChildren:!0};a.push(t),n.push(t)}else if(e.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:r.value,hasChildren:!0};a.push(e),n.push(e)}}else if(l.includes(r.value)){let e={checked:!0,indeterminate:!1,value:r.value,hasChildren:!1};a.push(e),n.push(e)}return{result:n,currentTreeChecked:a}}function r(e,l,n=[]){let a=function e(l,n){for(let a of n){if(a.value===l)return a;if(Array.isArray(a.children)){let n=e(l,a.children);if(n)return n}}return null}(e,l);return a?Array.isArray(a.children)&&0!==a.children.length?(a.children.forEach(e=>{Array.isArray(e.children)&&e.children.length>0?r(e.value,l,n):n.push(e.value)}),n):[a.value]:n}function o(e){let l=new Map;return(...n)=>{let a=JSON.stringify(n);if(l.has(a))return l.get(a);let t=e(...n);return l.set(a,t),t}}n(52322);let u=o(function(e,l,n){return 0!==n.length&&(!!n.includes(e)||t(l,n).result.some(l=>l.value===e&&l.checked))}),d=o(function(e,l,n){return 0!==n.length&&t(l,n).result.some(l=>l.value===e&&l.indeterminate)});function c(e,l,n,a={}){return l.forEach(l=>{a[l.value]=l.value in e?e[l.value]:l.value===n,Array.isArray(l.children)&&c(e,l.children,n,a)}),a}function s(e,l){let n=c({},e,[]);return"*"===l?Object.keys(n).reduce((e,l)=>({...e,[l]:!0}),{}):(l.forEach(e=>{n[e]=!0}),n)}function i({initialSelectedState:e=[],initialCheckedState:l=[],initialExpandedState:n={},multiple:o=!1,onNodeCollapse:s,onNodeExpand:i}={}){let[v,h]=(0,a.useState)([]),[m,f]=(0,a.useState)(n),[p,b]=(0,a.useState)(e),[k,g]=(0,a.useState)(l),[x,_]=(0,a.useState)(null),[j,y]=(0,a.useState)(null),A=(0,a.useCallback)(e=>{f(l=>c(l,e,p)),g(l=>(function(e,l){let n=[];return e.forEach(e=>n.push(...r(e,l))),Array.from(new Set(n))})(l,e)),h(e)},[p,k]),C=(0,a.useCallback)(e=>{f(l=>{let n={...l,[e]:!l[e]};return n[e]?i?.(e):s?.(e),n})},[s,i]),S=(0,a.useCallback)(e=>{f(l=>(!1!==l[e]&&s?.(e),{...l,[e]:!1}))},[s]),N=(0,a.useCallback)(e=>{f(l=>(!0!==l[e]&&i?.(e),{...l,[e]:!0}))},[i]),E=(0,a.useCallback)(()=>{f(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!0}),l})},[]),T=(0,a.useCallback)(()=>{f(e=>{let l={...e};return Object.keys(l).forEach(e=>{l[e]=!1}),l})},[]),w=(0,a.useCallback)(e=>b(l=>o?l.includes(e)?(_(null),l.filter(l=>l!==e)):(_(e),[...l,e]):l.includes(e)?(_(null),[]):(_(e),[e])),[]),O=(0,a.useCallback)(e=>{_(e),b(l=>o?l.includes(e)?l:[...l,e]:[e])},[]),D=(0,a.useCallback)(e=>{x===e&&_(null),b(l=>l.filter(l=>l!==e))},[]),P=(0,a.useCallback)(()=>{b([]),_(null)},[]),M=(0,a.useCallback)(e=>{let l=r(e,v);g(e=>Array.from(new Set([...e,...l])))},[v]),I=(0,a.useCallback)(e=>{let l=r(e,v);g(e=>e.filter(e=>!l.includes(e)))},[v]);return{multiple:o,expandedState:m,selectedState:p,checkedState:k,anchorNode:x,initialize:A,toggleExpanded:C,collapse:S,expand:N,expandAllNodes:E,collapseAllNodes:T,setExpandedState:f,checkNode:M,uncheckNode:I,checkAllNodes:(0,a.useCallback)(()=>{g(()=>(function e(l){return l.reduce((l,n)=>(Array.isArray(n.children)&&n.children.length>0?l.push(...e(n.children)):l.push(n.value),l),[])})(v))},[v]),uncheckAllNodes:(0,a.useCallback)(()=>{g([])},[]),setCheckedState:g,toggleSelected:w,select:O,deselect:D,clearSelected:P,setSelectedState:b,hoveredNode:j,setHoveredNode:y,getCheckedNodes:()=>t(v,k).result,isNodeChecked:e=>u(e,v,k),isNodeIndeterminate:e=>d(e,v,k)}}}}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83967,e=>{"use strict";let a,t;var n=e.i(648863);let r=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],l=`import { TreeNodeData } from '@mantine/core';

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
];`;var o=e.i(433512),s=e.i(481178),d=e.i(44091),c=e.i(391466),i=e.i(275519),u=e.i(232471),p=e.i(262055),m=e.i(935769);function h(e,a){for(let t of a){if(t.value===e)return t;if(Array.isArray(t.children)){let a=h(e,t.children);if(a)return a}}return null}function v(e,a,t=[]){let n=h(e,a);return n?Array.isArray(n.children)&&0!==n.children.length?(n.children.forEach(e=>{Array.isArray(e.children)&&e.children.length>0?v(e.value,a,t):t.push(e.value)}),t):[n.value]:t}var f=e.i(191788);let g={elementProps:{},dragHandleProps:void 0};var x=e.i(391398);function b(e,a,t){if(!e||!a)return[];let n=t.indexOf(e),r=t.indexOf(a),l=Math.min(n,r),o=Math.max(n,r);return t.slice(l,o+1)}function T({node:e,getStyles:a,rootIndex:t,controller:n,expandOnClick:r,selectOnClick:l,isSubtree:o,level:s=1,renderNode:d,flatValues:c,allowRangeSelection:i,expandOnSpace:v,checkOnSpace:k,keepMounted:y,onDragDrop:C,allowDrop:A,withDragHandle:N,dragStateRef:D,data:j}){let S=(0,f.useRef)(null),E=Array.isArray(e.children),H=!!e.hasChildren&&!E,w=E||H,I=n.isNodeLoading(e.value),M=n.getNodeLoadError(e.value),V=n.expandedState[e.value]||!1,Z=(e.children||[]).map(e=>(0,x.jsx)(T,{node:e,flatValues:c,getStyles:a,rootIndex:void 0,level:s+1,controller:n,expandOnClick:r,isSubtree:!0,renderNode:d,selectOnClick:l,allowRangeSelection:i,expandOnSpace:v,checkOnSpace:k,keepMounted:y,onDragDrop:C,allowDrop:A,withDragHandle:N,dragStateRef:D,data:j},e.value)),{elementProps:P,dragHandleProps:L}=function({nodeValue:e,hasChildren:a,data:t,onDragDrop:n,dragStateRef:r,allowDrop:l,withDragHandle:o}){let[s,d]=(0,f.useState)(!1);return((0,f.useEffect)(()=>{if(!o||!s)return;let e=()=>d(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[o,s]),n)?{elementProps:{draggable:!o||s,onDragStart:a=>{if(o&&!s)return;a.stopPropagation(),a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("text/plain",e),r.current.draggedValue=e;let t=a.currentTarget;requestAnimationFrame(()=>{t.setAttribute("data-dragging","true")})},onDragOver:n=>{var o,s,d;let c,i,u,p,m=r.current.draggedValue;if(!m||m===e||(p=h(m,t))&&p.children&&function a(t){for(let n of t)if(n.value===e||n.children&&a(n.children))return!0;return!1}(p.children))return;let v=n.currentTarget,f=(o=n,s=v,d=a,c=s.getBoundingClientRect(),i=o.clientY-c.top,u=c.height,d?i<.25*u?"before":i>.75*u?"after":"inside":i<.5*u?"before":"after");if(l&&!l({draggedNode:m,targetNode:e,position:f})){let e=r.current.currentDropTarget;e&&e!==v&&e.removeAttribute("data-drag-over"),v.removeAttribute("data-drag-over"),r.current.currentDropTarget=null;return}n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="move";let g=r.current.currentDropTarget;g&&g!==v&&g.removeAttribute("data-drag-over"),v.setAttribute("data-drag-over",f),r.current.currentDropTarget=v},onDragLeave:e=>{let a=e.currentTarget,t=e.relatedTarget;t&&a.contains(t)||(a.removeAttribute("data-drag-over"),r.current.currentDropTarget===a&&(r.current.currentDropTarget=null))},onDrop:a=>{a.preventDefault(),a.stopPropagation();let t=a.currentTarget,o=t.getAttribute("data-drag-over");t.removeAttribute("data-drag-over");let s=r.current.draggedValue;if(s&&o&&s!==e){let a={draggedNode:s,targetNode:e,position:o};(!l||l(a))&&n(a)}r.current.draggedValue=null,r.current.currentDropTarget=null},onDragEnd:e=>{e.currentTarget.removeAttribute("data-dragging");let a=r.current.currentDropTarget;a&&a.removeAttribute("data-drag-over"),r.current.draggedValue=null,r.current.currentDropTarget=null,o&&d(!1)}},dragHandleProps:o?{onMouseDown:()=>d(!0)}:void 0}:g}({nodeValue:e.value,hasChildren:w,data:j,onDragDrop:C,dragStateRef:D,allowDrop:A,withDragHandle:N}),F=n.selectedState.includes(e.value),z={...a("label"),onClick:a=>{a.stopPropagation(),i&&a.shiftKey&&n.anchorNode?n.setSelectedState(b(n.anchorNode,e.value,c)):(r&&n.toggleExpanded(e.value),l&&n.select(e.value)),S.current?.focus()},"data-selected":F||void 0,"data-value":e.value,...P},G=V&&I&&0===Z.length;return(0,x.jsxs)("li",{...a("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s-1})`}}),role:"treeitem","aria-selected":F,"data-value":e.value,"data-selected":F||void 0,"data-level":s,tabIndex:0===t?0:-1,onKeyDown:a=>{if("ArrowRight"===a.nativeEvent.code&&(a.stopPropagation(),a.preventDefault(),V?a.currentTarget.querySelector("[role=treeitem]")?.focus():n.expand(e.value)),"ArrowLeft"===a.nativeEvent.code&&(a.stopPropagation(),a.preventDefault(),V&&w?n.collapse(e.value):o&&(0,p.findElementAncestor)(a.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===a.nativeEvent.code||"ArrowUp"===a.nativeEvent.code){let e=(0,p.findElementAncestor)(a.currentTarget,"[data-tree-root]");if(!e)return;a.stopPropagation(),a.preventDefault();let t=Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display),r=t.indexOf(a.currentTarget);if(-1===r)return;let l="ArrowDown"===a.nativeEvent.code?r+1:r-1;if(t[l]?.focus(),a.shiftKey){let e=t[l];e&&n.setSelectedState(b(n.anchorNode,e.dataset.value,c))}}"Space"===a.nativeEvent.code&&(v&&(a.stopPropagation(),a.preventDefault(),n.toggleExpanded(e.value)),k&&(a.stopPropagation(),a.preventDefault(),n.isNodeChecked(e.value)?n.uncheckNode(e.value):n.checkNode(e.value)))},ref:S,children:["function"==typeof d?d({node:e,level:s,selected:F,tree:n,expanded:V,hasChildren:w,isLoading:I,loadError:M,elementProps:z,dragHandleProps:L}):(0,x.jsx)("div",{...z,children:e.label}),G&&(0,x.jsx)(u.Box,{component:"ul",role:"group",...a("subtree"),"data-level":s,children:(0,x.jsx)("li",{...a("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s})`}}),children:(0,x.jsx)("div",{...a("label"),children:(0,x.jsx)(m.Loader,{size:16})})})}),y&&Z.length>0?(0,x.jsx)(f.Activity,{mode:V?"visible":"hidden",children:(0,x.jsx)(u.Box,{component:"ul",role:"group",...a("subtree"),"data-level":s,children:Z})}):V&&Z.length>0&&(0,x.jsx)(u.Box,{component:"ul",role:"group",...a("subtree"),"data-level":s,children:Z})]})}function k(e,a,t=[]){let n=[];for(let r of e)if(Array.isArray(r.children)&&r.children.length>0){let e=k(r.children,a,t);if(e.currentTreeChecked.length===r.children.length){let a=e.currentTreeChecked.every(e=>e.checked),l={checked:a,indeterminate:!a,value:r.value,hasChildren:!0};n.push(l),t.push(l)}else if(e.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:r.value,hasChildren:!0};n.push(e),t.push(e)}}else if(a.includes(r.value)){let e={checked:!0,indeterminate:!1,value:r.value,hasChildren:!1};n.push(e),t.push(e)}return{result:t,currentTreeChecked:n}}function y(e){let a=new Map;return(...t)=>{let n=JSON.stringify(t);if(a.has(n))return a.get(n);let r=e(...t);return a.set(n,r),r}}T.displayName="@mantine/core/TreeNode";let C=y(function(e,a,t){return 0!==t.length&&(!!t.includes(e)||k(a,t).result.some(a=>a.value===e&&a.checked))}),A=y(function(e,a,t){return 0!==t.length&&k(a,t).result.some(a=>a.value===e&&a.indeterminate)});var N=e.i(579560);function D(e,a,t,n={}){return a.forEach(a=>{n[a.value]=a.value in e?e[a.value]:a.value===t,Array.isArray(a.children)&&D(e,a.children,t,n)}),n}function j(e,a){let t=D({},e,[]);if("*"===a){let e={},a=Object.keys(t);for(let t=0;t<a.length;t++)e[a[t]]=!0;return e}return a.forEach(e=>{t[e]=!0}),t}function S({initialSelectedState:e=[],expandedState:a,initialCheckedState:t=[],checkedState:n,initialExpandedState:r={},selectedState:l,multiple:o=!1,onNodeCollapse:s,onNodeExpand:d,onCheckedStateChange:c,onSelectedStateChange:i,onExpandedStateChange:u,onLoadChildren:p,checkStrictly:m=!1}={}){let[g,x]=(0,f.useState)([]),[b,T]=(0,N.useUncontrolled)({value:a,defaultValue:r,finalValue:{},onChange:u}),[y,j]=(0,N.useUncontrolled)({value:l,defaultValue:e,finalValue:[],onChange:i}),[E,H]=(0,N.useUncontrolled)({value:n,defaultValue:t,finalValue:[],onChange:c}),[w,I]=(0,f.useState)(null),M=(0,f.useRef)(new Set),V=(0,f.useRef)(new Set),[Z,P]=(0,f.useState)([]),[L,F]=(0,f.useState)({}),z=(0,f.useCallback)(e=>{T(D(b,e,y)),H(function(e,a,t){if(t)return e;let n=[];return e.forEach(e=>n.push(...v(e,a))),Array.from(new Set(n))}(E,e,m)),x(e)},[y,E,b,m]),G=(0,f.useCallback)(async e=>{if(p&&!(M.current.has(e)||V.current.has(e))){M.current.add(e),P(Array.from(M.current)),F(a=>{if(!(e in a))return a;let t={...a};return delete t[e],t});try{await p(e),V.current.add(e)}catch(t){let a=t instanceof Error?t:Error(String(t));F(t=>({...t,[e]:a}))}finally{M.current.delete(e),P(Array.from(M.current))}}},[p]),_=(0,f.useCallback)(e=>{if(!p)return;let a=h(e,g);a&&a.hasChildren&&!Array.isArray(a.children)&&G(e)},[p,g,G]),O=(0,f.useCallback)(e=>{let a={...b,[e]:!b[e]};a[e]?d?.(e):s?.(e),a[e]&&_(e),T(a)},[s,d,b,_]),R=(0,f.useCallback)(e=>{!1!==b[e]&&s?.(e),T({...b,[e]:!1})},[s,b]),B=(0,f.useCallback)(e=>{!0!==b[e]&&d?.(e),_(e),T({...b,[e]:!0})},[d,b,_]),$=(0,f.useCallback)(()=>{let e={...b};Object.keys(e).forEach(a=>{e[a]=!0,_(a)}),T(e)},[b,_]),q=(0,f.useCallback)(()=>{let e={...b};Object.keys(e).forEach(a=>{e[a]=!1}),T(e)},[b]),W=(0,f.useCallback)(e=>o?y.includes(e)?(I(null),y.filter(a=>a!==e)):void(I(e),j([...y,e])):y.includes(e)?(I(null),[]):(I(e),[e]),[y]),U=(0,f.useCallback)(e=>{I(e),j(o?y.includes(e)?y:[...y,e]:[e])},[y]),K=(0,f.useCallback)(e=>{w===e&&I(null),j(y.filter(a=>a!==e))},[y]),Y=(0,f.useCallback)(()=>{j([]),I(null)},[]),J=(0,f.useCallback)(e=>{m?E.includes(e)||H([...E,e]):H(Array.from(new Set([...E,...v(e,g)])))},[g,E,m]),Q=(0,f.useCallback)(e=>{if(m)H(E.filter(a=>a!==e));else{let a=v(e,g);H(E.filter(e=>!a.includes(e)))}},[g,E,m]),X=(0,f.useCallback)(()=>{m?H(function e(a){let t=[];for(let n of a)t.push(n.value),Array.isArray(n.children)&&n.children.length>0&&t.push(...e(n.children));return t}(g)):H(function e(a){return a.reduce((a,t)=>(Array.isArray(t.children)&&t.children.length>0?a.push(...e(t.children)):a.push(t.value),a),[])}(g))},[g,m]),ee=(0,f.useCallback)(()=>{H([])},[]),ea=(0,f.useCallback)(()=>m?E.map(e=>{let a=h(e,g);return{checked:!0,indeterminate:!1,value:e,hasChildren:!!a&&(Array.isArray(a.children)&&a.children.length>0||!!a.hasChildren)}}):k(g,E).result,[m,E,g]),et=(0,f.useCallback)(e=>m?E.includes(e):C(e,g,E),[m,E,g]),en=(0,f.useCallback)(e=>!m&&A(e,g,E),[m,E,g]),er=(0,f.useCallback)(e=>Z.includes(e),[Z]),el=(0,f.useCallback)(e=>L[e]||null,[L]),eo=(0,f.useCallback)(e=>{V.current.delete(e),F(a=>{if(!(e in a))return a;let t={...a};return delete t[e],t})},[]);return(0,f.useMemo)(()=>({checkStrictly:m,multiple:o,expandedState:b,selectedState:y,checkedState:E,anchorNode:w,initialize:z,toggleExpanded:O,collapse:R,expand:B,expandAllNodes:$,collapseAllNodes:q,setExpandedState:T,checkNode:J,uncheckNode:Q,checkAllNodes:X,uncheckAllNodes:ee,setCheckedState:H,toggleSelected:W,select:U,deselect:K,clearSelected:Y,setSelectedState:j,getCheckedNodes:ea,isNodeChecked:et,isNodeIndeterminate:en,isNodeLoading:er,getNodeLoadError:el,loadNode:G,invalidateNode:eo}),[m,o,b,y,E,w,z,O,R,B,$,q,T,J,Q,X,ee,H,W,U,K,Y,j,ea,et,en,er,el,G,eo])}var E={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"},H=e.i(196072),w=e.i(332977);let I={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},M=(0,s.createVarsResolver)((e,{levelOffset:a})=>({root:{"--level-offset":(0,o.getSpacing)(a)}})),V=(0,i.factory)(e=>{let a=(0,d.useProps)("Tree",I,e),{classNames:t,className:n,style:r,styles:l,unstyled:o,vars:s,data:i,expandOnClick:p,tree:m,renderNode:h,selectOnClick:v,clearSelectionOnOutsideClick:g,allowRangeSelection:b,expandOnSpace:k,levelOffset:y,checkOnSpace:C,keepMounted:A,onDragDrop:N,allowDrop:D,withDragHandle:j,withLines:V,attributes:Z,ref:P,...L}=a,F=S(),z=m||F,G=(0,f.useRef)({draggedValue:null,currentDropTarget:null}),_=(0,c.useStyles)({name:"Tree",classes:E,props:a,className:n,style:r,classNames:t,styles:l,unstyled:o,attributes:Z,vars:s,varsResolver:M}),O=(0,w.useMergedRef)(P,(0,H.useClickOutside)(()=>g&&z.clearSelected())),R=(0,f.useMemo)(()=>(function e(a){return a.reduce((a,t)=>(a.push(t.value),t.children&&a.push(...e(t.children)),a),[])})(i),[i]);(0,f.useEffect)(()=>{z.initialize(i)},[i]);let B=i.map((e,a)=>(0,x.jsx)(T,{node:e,getStyles:_,rootIndex:a,expandOnClick:p,selectOnClick:v,controller:z,renderNode:h,flatValues:R,allowRangeSelection:b,expandOnSpace:k,checkOnSpace:C,keepMounted:A,onDragDrop:N,allowDrop:D,withDragHandle:j,dragStateRef:G,data:i},e.value));return(0,x.jsx)(u.Box,{component:"ul",ref:O,..._("root"),...L,role:"tree","aria-multiselectable":z.multiple,"data-tree-root":!0,"data-with-lines":V||void 0,children:B})});V.displayName="@mantine/core/Tree",V.classes=E,V.varsResolver=M;let Z={type:"code",component:function(){return(0,x.jsx)(V,{data:r})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var P={root:"m_78f70933",leaf:"m_78f427af"},L=e.i(171481);let F=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l28.8,21.6A12,12,0,0,0,128,92h68v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z",opacity:"0.2"}),f.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z"}))]]),z=f.forwardRef((e,a)=>f.createElement(L.default,{ref:a,...e,weights:F}));z.displayName="FolderOpenIcon";let G=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68Zm-4,128H44V68H92l28.8,21.6A12,12,0,0,0,128,92h84Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",opacity:"0.2"}),f.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,88V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,74H130L101.73,52.8a14,14,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V200a14,14,0,0,0,14,14H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74Zm2,126.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H93.33a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h88a2,2,0,0,1,2,2Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,76H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V200a12,12,0,0,0,12,12H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76Zm4,124.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h88a4,4,0,0,1,4,4Z"}))]]),_=f.forwardRef((e,a)=>f.createElement(L.default,{ref:a,...e,weights:G}));_.displayName="FolderSimpleIcon";var O=e.i(725695),R=e.i(56206),B=e.i(271270),$=e.i(419122),q=e.i(392211);function W({name:e,isFolder:a,expanded:t}){return e.endsWith("package.json")?(0,x.jsx)($.NpmIcon,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,x.jsx)(q.TypeScriptCircleIcon,{size:14}):e.endsWith(".css")?(0,x.jsx)(B.CssIcon,{size:14}):a?t?(0,x.jsx)(z,{color:"var(--mantine-color-yellow-9)",size:14}):(0,x.jsx)(_,{color:"var(--mantine-color-yellow-9)",size:14}):null}function U({node:e,expanded:a,hasChildren:t,elementProps:n}){return(0,x.jsxs)(O.Group,{gap:5,...n,className:(0,R.default)(P.leaf,n.className),children:[(0,x.jsx)(W,{name:e.value,isFolder:t,expanded:a}),(0,x.jsx)("span",{children:e.label})]})}let K={type:"code",component:function(){return(0,x.jsx)(V,{classNames:P,selectOnClick:!0,clearSelectionOnOutsideClick:!0,data:r,renderNode:e=>(0,x.jsx)(U,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FolderSimpleIcon, FolderOpenIcon } from '@phosphor-icons/react';
import { Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { data, dataCode } from './data';
import classes from './Demo.module.css';

interface FileIconProps {
  name: string;
  isFolder: boolean;
  expanded: boolean;
}

function FileIcon({ name, isFolder, expanded }: FileIconProps) {
  if (name.endsWith('package.json')) {
    return <NpmIcon size={14} />;
  }

  if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('tsconfig.json')) {
    return <TypeScriptCircleIcon size={14} />;
  }

  if (name.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (isFolder) {
    return expanded ? (
      <FolderOpenIcon color="var(--mantine-color-yellow-9)" size={14} />
    ) : (
      <FolderSimpleIcon color="var(--mantine-color-yellow-9)" size={14} />
    );
  }

  return null;
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  return (
    <Tree
      classNames={classes}
      selectOnClick
      clearSelectionOnOutsideClick
      data={data}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  font-family: var(--mantine-font-family-monospace);
  font-size: 13px;
}

.leaf {
  padding-block: 3px;

  &[data-selected] {
    font-weight: 700;
    background-color: var(--mantine-color-blue-light) !important;
    color: var(--mantine-color-bright);
  }

  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
    color: var(--mantine-color-bright);
  }
}`},{fileName:"data.ts",language:"tsx",code:l}]};var Y=e.i(931882);let J={type:"code",component:function(){return(0,x.jsx)(V,{data:r,levelOffset:23,renderNode:({node:e,expanded:a,hasChildren:t,elementProps:n})=>(0,x.jsxs)(O.Group,{gap:5,...n,children:[t&&(0,x.jsx)(Y.CaretDownIcon,{size:18,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}}),(0,x.jsx)("span",{children:e.label})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Group, Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Tree
      data={data}
      levelOffset={23}
      renderNode={({ node, expanded, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          {hasChildren && (
            <CaretDownIcon
              size={18}
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          )}

          <span>{node.label}</span>
        </Group>
      )}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var Q=e.i(485108);let X={type:"code",component:function(){let e=S();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(V,{data:r,tree:e}),(0,x.jsxs)(O.Group,{mt:"md",children:[(0,x.jsx)(Q.Button,{onClick:()=>e.expandAllNodes(),children:"Expand all"}),(0,x.jsx)(Q.Button,{onClick:()=>e.collapseAllNodes(),children:"Collapse all"})]})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Button, Group, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree();

  return (
    <>
      <Tree data={data} tree={tree} />
      <Group mt="md">
        <Button onClick={() => tree.expandAllNodes()}>Expand all</Button>
        <Button onClick={() => tree.collapseAllNodes()}>Collapse all</Button>
      </Group>
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var ee=e.i(37541);let ea=({node:e,expanded:a,hasChildren:t,elementProps:n,tree:r})=>{let l=r.isNodeChecked(e.value),o=r.isNodeIndeterminate(e.value);return(0,x.jsxs)(O.Group,{gap:"xs",...n,children:[(0,x.jsx)(ee.Checkbox.Indicator,{checked:l,indeterminate:o,onClick:()=>l?r.uncheckNode(e.value):r.checkNode(e.value)}),(0,x.jsxs)(O.Group,{gap:5,onClick:()=>r.toggleExpanded(e.value),children:[(0,x.jsx)("span",{children:e.label}),t&&(0,x.jsx)(Y.CaretDownIcon,{size:14,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}})]})]})},et={type:"code",component:function(){return(0,x.jsx)(V,{data:r,levelOffset:23,expandOnClick:!1,renderNode:ea})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        indeterminate={indeterminate}
        onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <CaretDownIcon
            size={14}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        )}
      </Group>
    </Group>
  );
};

function Demo() {
  return <Tree data={data} levelOffset={23} expandOnClick={false} renderNode={renderTreeNode} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]},en={type:"code",component:function(){return(0,x.jsx)(V,{data:r,tree:S({initialExpandedState:j(r,["src","src/components"])})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, ['src', 'src/components']),
  });

  return <Tree data={data} tree={tree} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]},er=({node:e,expanded:a,hasChildren:t,elementProps:n,tree:r})=>{let l=r.isNodeChecked(e.value),o=r.isNodeIndeterminate(e.value);return(0,x.jsxs)(O.Group,{gap:"xs",...n,children:[(0,x.jsx)(ee.Checkbox.Indicator,{checked:l,indeterminate:o,onClick:()=>l?r.uncheckNode(e.value):r.checkNode(e.value)}),(0,x.jsxs)(O.Group,{gap:5,onClick:()=>r.toggleExpanded(e.value),children:[(0,x.jsx)("span",{children:e.label}),t&&(0,x.jsx)(Y.CaretDownIcon,{size:14,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}})]})]})},el={type:"code",component:function(){let e=S({initialExpandedState:j(r,"*"),initialCheckedState:["node_modules","node_modules/@mantine/core/index.d.ts","node_modules/@mantine/form/package.json"]});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(O.Group,{mb:"md",children:[(0,x.jsx)(Q.Button,{onClick:()=>e.checkAllNodes(),children:"CheckIcon all"}),(0,x.jsx)(Q.Button,{onClick:()=>e.uncheckAllNodes(),children:"Uncheck all"})]}),(0,x.jsx)(V,{tree:e,data:r,levelOffset:23,expandOnClick:!1,renderNode:er})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import {
  Button,
  Checkbox,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  Tree,
  useTree,
} from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        indeterminate={indeterminate}
        onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <CaretDownIcon
            size={14}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        )}
      </Group>
    </Group>
  );
};

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
    initialCheckedState: [
      'node_modules',
      'node_modules/@mantine/core/index.d.ts',
      'node_modules/@mantine/form/package.json',
    ],
  });

  return (
    <>
      <Group mb="md">
        <Button onClick={() => tree.checkAllNodes()}>CheckIcon all</Button>
        <Button onClick={() => tree.uncheckAllNodes()}>Uncheck all</Button>
      </Group>

      <Tree
        tree={tree}
        data={data}
        levelOffset={23}
        expandOnClick={false}
        renderNode={renderTreeNode}
      />
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};function eo(e,a){let t,{draggedNode:n,targetNode:r,position:l}=a;if(n===r||!h(r,e)||(t=h(n,e))&&t.children&&function e(a){for(let t of a)if(t.value===r||t.children&&e(t.children))return!0;return!1}(t.children))return e;let{data:o,removed:s}=function e(a,t){let n=null;return{data:a.reduce((a,r)=>{if(r.value===t)return n={...r},a;if(r.children){let l=e(r.children,t);l.removed?(n=l.removed,a.push({...r,children:l.data})):a.push(r)}else a.push(r);return a},[]),removed:n}}(e,n);return s?function e(a,t,n,r){if("inside"===r)return a.map(a=>a.value===n?{...a,children:[...a.children||[],t]}:a.children?{...a,children:e(a.children,t,n,r)}:a);let l=a.findIndex(e=>e.value===n);if(-1!==l){let e=[...a];return e.splice("before"===r?l:l+1,0,t),e}return a.map(a=>a.children?{...a,children:e(a.children,t,n,r)}:a)}(o,s,r,l):e}let es=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"},{label:"contact.tsx",value:"pages/contact.tsx"}]},{label:"Components",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"},{label:"Sidebar.tsx",value:"components/Sidebar.tsx"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}];function ed({node:e,expanded:a,hasChildren:t,elementProps:n}){return(0,x.jsxs)(O.Group,{gap:5,...n,children:[t&&(0,x.jsx)(Y.CaretDownIcon,{size:18,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}}),(0,x.jsx)("span",{children:e.label})]})}let ec={type:"code",component:function(){let[e,a]=(0,f.useState)(es);return(0,x.jsx)(V,{data:e,onDragDrop:e=>a(a=>eo(a,e)),renderNode:e=>(0,x.jsx)(ed,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
      { label: 'contact.tsx', value: 'pages/contact.tsx' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
      { label: 'Sidebar.tsx', value: 'components/Sidebar.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      {hasChildren && (
        <CaretDownIcon
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(data);

  return (
    <Tree
      data={treeData}
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},ei=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"}]},{label:"Components (locked)",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"}]},{label:"package.json",value:"package.json"}];function eu({node:e,expanded:a,hasChildren:t,elementProps:n}){return(0,x.jsxs)(O.Group,{gap:5,...n,children:[t&&(0,x.jsx)(Y.CaretDownIcon,{size:18,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}}),(0,x.jsx)("span",{children:e.label})]})}let ep={type:"code",component:function(){let[e,a]=(0,f.useState)(ei);return(0,x.jsx)(V,{data:e,allowDrop:({draggedNode:e,targetNode:a,position:t})=>!("components"===e||e.startsWith("components/"))&&("components"!==a||"inside"!==t)&&!a.startsWith("components/"),onDragDrop:e=>a(a=>eo(a,e)),renderNode:e=>(0,x.jsx)(eu,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
    ],
  },
  {
    label: 'Components (locked)',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      {hasChildren && (
        <CaretDownIcon
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(data);

  return (
    <Tree
      data={treeData}
      // Forbid dropping into or onto "components" branch
      allowDrop={({ draggedNode, targetNode, position }) => {
        if (draggedNode === 'components' || draggedNode.startsWith('components/')) {
          return false;
        }

        if (targetNode === 'components' && position === 'inside') {
          return false;
        }

        return !targetNode.startsWith('components/');
      }}
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`};var em=e.i(414124);let eh=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"}]},{label:"Components",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"}]},{label:"package.json",value:"package.json"}];function ev({node:e,expanded:a,hasChildren:t,elementProps:n,dragHandleProps:r}){return(0,x.jsxs)(O.Group,{gap:4,...n,children:[(0,x.jsx)(em.DotsSixVerticalIcon,{...r,size:16,style:{cursor:"grab"}}),t&&(0,x.jsx)(Y.CaretDownIcon,{size:18,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}}),(0,x.jsx)("span",{children:e.label})]})}let ef={type:"code",component:function(){let[e,a]=(0,f.useState)(eh);return(0,x.jsx)(V,{data:e,withDragHandle:!0,onDragDrop:e=>a(a=>eo(a,e)),renderNode:e=>(0,x.jsx)(ev,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { CaretDownIcon, DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

function Leaf({ node, expanded, hasChildren, elementProps, dragHandleProps }: RenderTreeNodePayload) {
  return (
    <Group gap={4} {...elementProps}>
      <DotsSixVerticalIcon
        {...dragHandleProps}
        size={16}
        style={{ cursor: 'grab' }}
      />
      {hasChildren && (
        <CaretDownIcon
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(data);

  return (
    <Tree
      data={treeData}
      withDragHandle
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},eg=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),f.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm39.25,56.75A6,6,0,0,0,177.5,87l22.62-22.63a6,6,0,0,0-8.48-8.48L169,78.5a6,6,0,0,0,4.24,10.25ZM224,122H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z"}))]]),ex=f.forwardRef((e,a)=>f.createElement(L.default,{ref:a,...e,weights:eg}));ex.displayName="SpinnerIcon";let eb=[{label:"Documents",value:"documents",hasChildren:!0},{label:"Photos",value:"photos",hasChildren:!0},{label:"README.md",value:"readme"}];async function eT(e){return await new Promise(e=>{setTimeout(e,1e3)}),[{label:`${e}/file-1.txt`,value:`${e}/file-1.txt`},{label:`${e}/file-2.txt`,value:`${e}/file-2.txt`},{label:`${e}/subfolder`,value:`${e}/subfolder`,hasChildren:!0}]}function ek({node:e,expanded:a,hasChildren:t,elementProps:n,isLoading:r}){return(0,x.jsxs)(O.Group,{gap:5,wrap:"nowrap",...n,children:[r?(0,x.jsx)(ex,{size:18,style:{animation:"spin 1s linear infinite",flexShrink:0}}):t&&(0,x.jsx)(Y.CaretDownIcon,{size:18,style:{transform:a?"rotate(180deg)":"rotate(0deg)",flexShrink:0}}),(0,x.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]})}let ey={type:"code",component:function(){let[e,a]=(0,f.useState)(eb);return(0,x.jsx)(V,{data:e,tree:S({onLoadChildren:async e=>{let t=await eT(e);a(a=>(function e(a,t,n){let r=!1,l=a.map(a=>{if(a.value===t){r=!0;let e={...a,children:n};return delete e.hasChildren,e}if(Array.isArray(a.children)){let l=e(a.children,t,n);if(l!==a.children)return r=!0,{...a,children:l}}return a});return r?l:a})(a,e,t))}}),renderNode:e=>(0,x.jsx)(ek,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { CaretDownIcon, SpinnerIcon } from '@phosphor-icons/react';
import {
  Group,
  mergeAsyncChildren,
  RenderTreeNodePayload,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const initialData: TreeNodeData[] = [
  { label: 'Documents', value: 'documents', hasChildren: true },
  { label: 'Photos', value: 'photos', hasChildren: true },
  { label: 'README.md', value: 'readme' },
];

// Simulates an API call to load children
async function fetchChildren(parentValue: string): Promise<TreeNodeData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { label: \`\${parentValue}/file-1.txt\`, value: \`\${parentValue}/file-1.txt\` },
    { label: \`\${parentValue}/file-2.txt\`, value: \`\${parentValue}/file-2.txt\` },
    {
      label: \`\${parentValue}/subfolder\`,
      value: \`\${parentValue}/subfolder\`,
      hasChildren: true,
    },
  ];
}

function Leaf({ node, expanded, hasChildren, elementProps, isLoading }: RenderTreeNodePayload) {
  return (
    <Group gap={5} wrap="nowrap" {...elementProps}>
      {isLoading ? (
        <SpinnerIcon size={18} style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }} />
      ) : (
        hasChildren && (
          <CaretDownIcon
            size={18}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
          />
        )
      )}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {node.label}
      </span>
    </Group>
  );
}

function Demo() {
  const [data, setData] = useState(initialData);
  const tree = useTree({
    onLoadChildren: async (value) => {
      const children = await fetchChildren(value);
      setData((prev) => mergeAsyncChildren(prev, value, children));
    },
  });

  return (
    <Tree
      data={data}
      tree={tree}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`};var eC=e.i(754067),eA=e.i(841209);function eN(e,a){return("string"==typeof a.label?a.label:a.value).toLowerCase().includes(e.toLowerCase().trim())}function eD(e,a,t=eN){if(!a.trim())return e;let n=[];for(let r of e){let e=t(a,r),l=Array.isArray(r.children)&&r.children.length>0?eD(r.children,a,t):[];(e||l.length>0)&&n.push(l.length>0?{...r,children:l}:{...r})}return n}let ej=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],eS={type:"code",component:function(){let[e,a]=(0,f.useState)(""),t=S({initialExpandedState:j(ej,[])});return(0,x.jsxs)("div",{children:[(0,x.jsx)(eA.TextInput,{placeholder:"Search...",mb:"sm",value:e,onChange:e=>{var n;a(n=e.currentTarget.value),n.trim()?t.setExpandedState(j(ej,function e(a,t){let n=[];for(let r of a){let a=r.children?e(r.children,t):[];(eN(t,r)||a.length>0)&&n.push(r.value,...a)}return n}(ej,n))):t.collapseAllNodes()}}),(0,x.jsx)(V,{data:ej,tree:t,renderNode:({node:a,elementProps:t})=>{let n="string"==typeof a.label?a.label:a.value;return(0,x.jsx)("div",{...t,children:(0,x.jsx)(eC.Highlight,{highlight:e,component:"span",children:n})})}})]})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import {
  defaultTreeNodeFilter,
  getTreeExpandedState,
  Highlight,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const data: TreeNodeData[] = [
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
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function getMatchingAncestors(
  nodes: TreeNodeData[],
  query: string
): string[] {
  const result: string[] = [];
  for (const node of nodes) {
    const childMatches = node.children
      ? getMatchingAncestors(node.children, query)
      : [];
    if (
      defaultTreeNodeFilter(query, node) ||
      childMatches.length > 0
    ) {
      result.push(node.value, ...childMatches);
    }
  }
  return result;
}

function Demo() {
  const [search, setSearch] = useState('');
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, []),
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      tree.setExpandedState(
        getTreeExpandedState(data, getMatchingAncestors(data, value))
      );
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        data={data}
        tree={tree}
        renderNode={({ node, elementProps, hasChildren, expanded }) => {
          const label =
            typeof node.label === 'string' ? node.label : node.value;
          return (
            <div {...elementProps}>
              <Highlight highlight={search} component="span">
                {label}
              </Highlight>
            </div>
          );
        }}
      />
    </div>
  );
}
`},eE=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],eH={type:"code",component:function(){let[e,a]=(0,f.useState)(""),t=S(),n=(0,f.useMemo)(()=>eD(eE,e),[e]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(eA.TextInput,{placeholder:"Search...",mb:"sm",value:e,onChange:e=>(e=>{if(a(e),e.trim()){let a=eD(eE,e);t.setExpandedState(j(a,"*"))}else t.collapseAllNodes()})(e.currentTarget.value)}),(0,x.jsx)(V,{data:n,tree:t})]})},centered:!0,maxWidth:340,code:`
import { useMemo, useState } from 'react';
import {
  filterTreeData,
  getTreeExpandedState,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const data: TreeNodeData[] = [
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
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function Demo() {
  const [search, setSearch] = useState('');
  const tree = useTree();

  const filteredData = useMemo(
    () => filterTreeData(data, search),
    [search]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      const next = filterTreeData(data, value);
      tree.setExpandedState(getTreeExpandedState(next, '*'));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree data={filteredData} tree={tree} />
    </div>
  );
}
`};var ew=e.i(280130);let eI=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],eM={type:"code",component:function(){let[e,a]=(0,f.useState)(""),t=S(),n=(0,f.useMemo)(()=>{let e;return e=new ew.default(function e(a){return a.reduce((a,t)=>(a.push(t),t.children&&a.push(...e(t.children)),a),[])}(eI),{keys:["label"],threshold:.3}),(a,t)=>e.search(a).some(e=>e.item.value===t.value)},[]),r=(0,f.useMemo)(()=>eD(eI,e,n),[e,n]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(eA.TextInput,{placeholder:"Fuzzy search...",mb:"sm",value:e,onChange:e=>(e=>{if(a(e),e.trim()){let a=eD(eI,e,n);t.setExpandedState(j(a,"*"))}else t.collapseAllNodes()})(e.currentTarget.value)}),(0,x.jsx)(V,{data:r,tree:t})]})},centered:!0,maxWidth:340,code:`
import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import {
  filterTreeData,
  getTreeExpandedState,
  TextInput,
  Tree,
  TreeNodeData,
  TreeNodeFilter,
  useTree,
} from '@mantine/core';

const data: TreeNodeData[] = [
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
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function flattenTreeData(nodes: TreeNodeData[]): TreeNodeData[] {
  return nodes.reduce<TreeNodeData[]>((acc, node) => {
    acc.push(node);
    if (node.children) {
      acc.push(...flattenTreeData(node.children));
    }
    return acc;
  }, []);
}

function createFuzzyFilter(nodes: TreeNodeData[]): TreeNodeFilter {
  const flatNodes = flattenTreeData(nodes);
  const fuse = new Fuse(flatNodes, {
    keys: ['label'],
    threshold: 0.3,
  });

  return (query, node) => {
    const results = fuse.search(query);
    return results.some((result) => result.item.value === node.value);
  };
}

function Demo() {
  const [search, setSearch] = useState('');
  const tree = useTree();
  const fuzzyFilter = useMemo(() => createFuzzyFilter(data), []);

  const filteredData = useMemo(
    () => filterTreeData(data, search, fuzzyFilter),
    [search, fuzzyFilter]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      const next = filterTreeData(data, value, fuzzyFilter);
      tree.setExpandedState(getTreeExpandedState(next, '*'));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Fuzzy search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree data={filteredData} tree={tree} />
    </div>
  );
}
`},eV={type:"code",component:function(){return(0,x.jsx)(V,{data:r,tree:S({initialExpandedState:j(r,"*")}),withLines:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
  });

  return <Tree data={data} tree={tree} withLines />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]},eZ=(0,f.memo)(function({node:e,level:a,parent:t,hasChildren:n,expanded:r,tree:l,expandOnClick:o=!0,selectOnClick:s,expandOnSpace:d=!0,checkOnSpace:c,renderNode:i,style:u,tabIndex:m=-1}){let h=(0,f.useRef)(null),v=l.isNodeLoading(e.value),g=l.getNodeLoadError(e.value),b=l.selectedState.includes(e.value),T={className:E.label,style:{},onClick:a=>{a.stopPropagation(),o&&n&&l.toggleExpanded(e.value),s&&l.select(e.value),h.current?.focus()},"data-selected":b||void 0,"data-value":e.value};return(0,x.jsx)("div",{ref:h,className:E.node,style:{"--label-offset":`calc(var(--level-offset, var(--mantine-spacing-lg)) * ${a-1})`,...u},role:"treeitem","aria-selected":b,"aria-expanded":n?r:void 0,"data-value":e.value,"data-selected":b||void 0,"data-level":a,tabIndex:m,onKeyDown:a=>{if("ArrowRight"===a.nativeEvent.code)if(a.stopPropagation(),a.preventDefault(),r&&n){let e=(0,p.findElementAncestor)(a.currentTarget,"[data-tree-root]"),t=e?Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display):[],n=t.indexOf(a.currentTarget);-1!==n&&t[n+1]?.focus()}else n&&l.expand(e.value);if("ArrowLeft"===a.nativeEvent.code&&(a.stopPropagation(),a.preventDefault(),r&&n?l.collapse(e.value):t&&(0,p.findElementAncestor)(a.currentTarget,"[data-tree-root]")?.querySelector(`[role=treeitem][data-value="${CSS.escape(t)}"]`)?.focus()),"ArrowDown"===a.nativeEvent.code||"ArrowUp"===a.nativeEvent.code){let e=(0,p.findElementAncestor)(a.currentTarget,"[data-tree-root]");if(!e)return;a.stopPropagation(),a.preventDefault();let t=Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display),n=t.indexOf(a.currentTarget);if(-1===n)return;t["ArrowDown"===a.nativeEvent.code?n+1:n-1]?.focus()}"Space"===a.nativeEvent.code&&(d&&(a.stopPropagation(),a.preventDefault(),l.toggleExpanded(e.value)),c&&(a.stopPropagation(),a.preventDefault(),l.isNodeChecked(e.value)?l.uncheckNode(e.value):l.checkNode(e.value)))},children:"function"==typeof i?i({node:e,level:a,selected:b,tree:l,expanded:r,hasChildren:n,isLoading:v,loadError:g,elementProps:T,dragHandleProps:void 0}):(0,x.jsx)("div",{...T,children:e.label})})});eZ.displayName="@mantine/core/FlatTreeNode";var eP=e.i(463044);let eL=`
import { useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  FlatTreeNode,
  flattenTreeData,
  getTreeExpandedState,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const ITEM_HEIGHT = 30;

function generateTreeData(count: number): TreeNodeData[] {
  const result: TreeNodeData[] = [];
  let id = 0;

  function addChildren(
    parent: TreeNodeData[],
    depth: number,
    remaining: { count: number }
  ) {
    const childCount = depth === 0 ? 20 : Math.floor(Math.random() * 8) + 2;

    for (let i = 0; i < childCount && remaining.count > 0; i++) {
      id++;
      remaining.count--;
      const hasChild =
        depth < 3 && remaining.count > 0 && Math.random() > 0.3;
      const node: TreeNodeData = {
        label: \`\${hasChild ? 'Folder' : 'File'} \${id}\`,
        value: \`node-\${id}\`,
        children: hasChild ? [] : undefined,
      };

      if (hasChild) {
        addChildren(node.children!, depth + 1, remaining);
      }

      parent.push(node);
    }
  }

  addChildren(result, 0, { count });
  return result;
}

const largeData = generateTreeData(2000);
const initialExpandedState = getTreeExpandedState(largeData, '*');

function Demo() {
  const tree = useTree({
    initialExpandedState,
  });

  const flatList = useMemo(
    () => flattenTreeData(largeData, tree.expandedState),
    [tree.expandedState]
  );

  const scrollParentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: flatList.length,
    getScrollElement: () => scrollParentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 20,
  });

  return (
    <div ref={scrollParentRef} style={{ height: 400, overflow: 'auto' }}>
      <div
        data-tree-root
        role="tree"
        style={{
          height: virtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <FlatTreeNode
            key={flatList[virtualItem.index].node.value}
            {...flatList[virtualItem.index]}
            tree={tree}
            expandOnClick
            selectOnClick
            tabIndex={virtualItem.index === 0 ? 0 : -1}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualItem.size,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
`,eF=(t=0,!function e(a,n,r){let l=0===n?20:Math.floor(8*Math.random())+2;for(let o=0;o<l&&r.count>0;o++){t++,r.count--;let l=n<3&&r.count>0&&Math.random()>.3,o={label:`${l?"Folder":"File"} ${t}`,value:`node-${t}`,children:l?[]:void 0};l&&e(o.children,n+1,r),a.push(o)}}(a=[],0,{count:2e3}),a),ez=j(eF,"*"),eG={type:"code",component:function(){let e=S({initialExpandedState:ez}),a=(0,f.useMemo)(()=>{var a;let t;return a=e.expandedState,!function e(a,t,n,r,l){for(let o=0;o<t.length;o++){let s=t[o],d=Array.isArray(s.children),c=!!s.hasChildren&&!d,i=d||c,u=n[s.value]||!1;a.push({node:s,level:l,parent:r,hasChildren:i,expanded:u}),u&&d&&e(a,s.children,n,s.value,l+1)}}(t=[],eF,a,null,1),t},[e.expandedState]),t=(0,f.useRef)(null),n=(0,eP.useVirtualizer)({count:a.length,getScrollElement:()=>t.current,estimateSize:()=>30,overscan:20});return(0,x.jsx)("div",{ref:t,style:{height:400,overflow:"auto"},children:(0,x.jsx)("div",{"data-tree-root":!0,role:"tree",style:{height:n.getTotalSize(),position:"relative"},children:n.getVirtualItems().map(t=>(0,x.jsx)(eZ,{...a[t.index],tree:e,expandOnClick:!0,selectOnClick:!0,tabIndex:0===t.index?0:-1,style:{position:"absolute",top:0,left:0,width:"100%",height:t.size,transform:`translateY(${t.start}px)`}},a[t.index].node.value))})})},code:eL,defaultExpanded:!1},e_=({node:e,expanded:a,hasChildren:t,elementProps:n,tree:r})=>{let l=r.isNodeChecked(e.value);return(0,x.jsxs)(O.Group,{gap:"xs",...n,children:[(0,x.jsx)(ee.Checkbox.Indicator,{checked:l,onClick:()=>l?r.uncheckNode(e.value):r.checkNode(e.value)}),(0,x.jsxs)(O.Group,{gap:5,onClick:()=>r.toggleExpanded(e.value),children:[(0,x.jsx)("span",{children:e.label}),t&&(0,x.jsx)(Y.CaretDownIcon,{size:14,style:{transform:a?"rotate(180deg)":"rotate(0deg)"}})]})]})},eO={type:"code",component:function(){return(0,x.jsx)(V,{data:r,tree:S({checkStrictly:!0}),levelOffset:23,expandOnClick:!1,renderNode:e_})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        onClick={() =>
          checked
            ? tree.uncheckNode(node.value)
            : tree.checkNode(node.value)
        }
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <CaretDownIcon
            size={14}
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        )}
      </Group>
    </Group>
  );
};

function Demo() {
  const tree = useTree({ checkStrictly: true });
  return (
    <Tree
      data={data}
      tree={tree}
      levelOffset={23}
      expandOnClick={false}
      renderNode={renderTreeNode}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var eR=(0,n.__exportAll)({asyncLoading:()=>ey,checkAllNodes:()=>el,checkStrictly:()=>eO,checked:()=>et,controller:()=>X,dragDrop:()=>ec,dragDropAllow:()=>ep,dragDropHandle:()=>ef,expandedState:()=>en,files:()=>K,lines:()=>eV,renderNode:()=>J,searchFilter:()=>eH,searchFuzzy:()=>eM,searchHighlight:()=>eS,usage:()=>Z,virtualized:()=>eG});e.s(["TreeDemos",0,eR],83967)}]);
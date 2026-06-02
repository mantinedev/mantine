(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83967,e=>{"use strict";let t,a;var o=e.i(648863);let n=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],l=`import { TreeNodeData } from '@mantine/core';

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
];`;var r=e.i(119004),s=e.i(540413),i=e.i(235209),d=e.i(725695),c=e.i(433512),u=e.i(481178),p=e.i(44091),m=e.i(391466),h=e.i(275519),x=e.i(232471),g=e.i(262055),v=e.i(935769),f=e.i(96618),b=e.i(191788);let y={elementProps:{},dragHandleProps:void 0};var T=e.i(391398);function I(e,t,a){if(!e||!t)return[];let o=a.indexOf(e),n=a.indexOf(t),l=Math.min(o,n),r=Math.max(o,n);return a.slice(l,r+1)}function k({node:e,getStyles:t,rootIndex:a,controller:o,expandOnClick:n,selectOnClick:l,isSubtree:r,level:s=1,renderNode:i,flatValues:d,allowRangeSelection:c,expandOnSpace:u,checkOnSpace:p,keepMounted:m,onDragDrop:h,allowDrop:j,withDragHandle:N,dragStateRef:S,data:F}){let D=(0,b.useRef)(null),C=Array.isArray(e.children),z=!!e.hasChildren&&!C,P=C||z,w=o.isNodeLoading(e.value),E=o.getNodeLoadError(e.value),O=o.expandedState[e.value]||!1,A=(e.children||[]).map(e=>(0,T.jsx)(k,{node:e,flatValues:d,getStyles:t,rootIndex:void 0,level:s+1,controller:o,expandOnClick:n,isSubtree:!0,renderNode:i,selectOnClick:l,allowRangeSelection:c,expandOnSpace:u,checkOnSpace:p,keepMounted:m,onDragDrop:h,allowDrop:j,withDragHandle:N,dragStateRef:S,data:F},e.value)),{elementProps:G,dragHandleProps:L}=function({nodeValue:e,hasChildren:t,isExpanded:a,data:o,onDragDrop:n,dragStateRef:l,allowDrop:r,withDragHandle:s}){let[i,d]=(0,b.useState)(!1);return((0,b.useEffect)(()=>{if(!s||!i)return;let e=()=>d(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[s,i]),n)?{elementProps:{draggable:!s||i,onDragStart:t=>{if(s&&!i)return;t.stopPropagation(),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e),l.current.draggedValue=e;let a=t.currentTarget,o=a.closest("[role=treeitem]");o&&o.setAttribute("data-dragging","true"),requestAnimationFrame(()=>{a.setAttribute("data-dragging","true")})},onDragOver:n=>{let s,i=l.current.draggedValue;if(!i||i===e||(s=(0,f.findTreeNode)(i,o))&&s.children&&function t(a){for(let o of a)if(o.value===e||o.children&&t(o.children))return!0;return!1}(s.children))return;let d=n.currentTarget,c=function(e,t,a,o){let n=t.getBoundingClientRect(),l=e.clientY-n.top,r=n.height;if(a)return o?l<.5*r?"before":"inside":l<.25*r?"before":l>.75*r?"after":"inside";return l<.5*r?"before":"after"}(n,d,t,a);if(r&&!r({draggedNode:i,targetNode:e,position:c})){let e=l.current.currentDropTarget;e&&e!==d&&e.removeAttribute("data-drag-over"),d.removeAttribute("data-drag-over"),l.current.currentDropTarget=null;return}n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="move";let u=l.current.currentDropTarget;u&&u!==d&&u.removeAttribute("data-drag-over"),d.setAttribute("data-drag-over",c),l.current.currentDropTarget=d},onDragLeave:e=>{let t=e.currentTarget,a=e.relatedTarget;a&&t.contains(a)||(t.removeAttribute("data-drag-over"),l.current.currentDropTarget===t&&(l.current.currentDropTarget=null))},onDrop:t=>{t.preventDefault(),t.stopPropagation();let a=t.currentTarget,o=a.getAttribute("data-drag-over");a.removeAttribute("data-drag-over");let s=l.current.draggedValue;if(s&&o&&s!==e){let t={draggedNode:s,targetNode:e,position:o};(!r||r(t))&&n(t)}l.current.draggedValue=null,l.current.currentDropTarget=null},onDragEnd:e=>{let t=e.currentTarget;t.removeAttribute("data-dragging");let a=t.closest("[role=treeitem]");a&&a.removeAttribute("data-dragging");let o=l.current.currentDropTarget;o&&o.removeAttribute("data-drag-over"),l.current.draggedValue=null,l.current.currentDropTarget=null,s&&d(!1)}},dragHandleProps:s?{onMouseDown:()=>d(!0)}:void 0}:y}({nodeValue:e.value,hasChildren:P,isExpanded:O,data:F,onDragDrop:h,dragStateRef:S,allowDrop:j,withDragHandle:N}),R=o.selectedState.includes(e.value),M={...t("label"),onClick:t=>{t.stopPropagation(),c&&t.shiftKey&&o.anchorNode?o.setSelectedState(I(o.anchorNode,e.value,d)):(n&&o.toggleExpanded(e.value),l&&o.select(e.value)),D.current?.focus()},"data-selected":R||void 0,"data-value":e.value,...G},_=O&&w&&0===A.length;return(0,T.jsxs)("li",{...t("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s-1})`}}),role:"treeitem","aria-selected":R,"data-value":e.value,"data-selected":R||void 0,"data-level":s,tabIndex:0===a?0:-1,onKeyDown:t=>{if("ArrowRight"===t.nativeEvent.code&&(t.stopPropagation(),t.preventDefault(),O?t.currentTarget.querySelector("[role=treeitem]")?.focus():o.expand(e.value)),"ArrowLeft"===t.nativeEvent.code&&(t.stopPropagation(),t.preventDefault(),O&&P?o.collapse(e.value):r&&(0,g.findElementAncestor)(t.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===t.nativeEvent.code||"ArrowUp"===t.nativeEvent.code){let e=(0,g.findElementAncestor)(t.currentTarget,"[data-tree-root]");if(!e)return;t.stopPropagation(),t.preventDefault();let a=Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display),n=a.indexOf(t.currentTarget);if(-1===n)return;let l="ArrowDown"===t.nativeEvent.code?n+1:n-1;if(a[l]?.focus(),t.shiftKey){let e=a[l];e&&o.setSelectedState(I(o.anchorNode,e.dataset.value,d))}}"Space"===t.nativeEvent.code&&(u&&(t.stopPropagation(),t.preventDefault(),o.toggleExpanded(e.value)),p&&(t.stopPropagation(),t.preventDefault(),o.isNodeChecked(e.value)?o.uncheckNode(e.value):o.checkNode(e.value)))},ref:D,children:["function"==typeof i?i({node:e,level:s,selected:R,isRoot:1===s,tree:o,expanded:O,hasChildren:P,isLoading:w,loadError:E,elementProps:M,dragHandleProps:L}):(0,T.jsx)("div",{...M,children:e.label}),_&&(0,T.jsx)(x.Box,{component:"ul",role:"group",...t("subtree"),"data-level":s,children:(0,T.jsx)("li",{...t("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s})`}}),children:(0,T.jsx)("div",{...t("label"),children:(0,T.jsx)(v.Loader,{size:16,style:{marginInlineStart:4}})})})}),m&&A.length>0?(0,T.jsx)(b.Activity,{mode:O?"visible":"hidden",children:(0,T.jsx)(x.Box,{component:"ul",role:"group",...t("subtree"),"data-level":s,children:A})}):O&&A.length>0&&(0,T.jsx)(x.Box,{component:"ul",role:"group",...t("subtree"),"data-level":s,children:A})]})}k.displayName="@mantine/core/TreeNode";var j=e.i(127262),N={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425",flatLine:"m_c03b303c",flatLineClosing:"m_bf7448d9"},S=e.i(196072),F=e.i(332977);let D={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},C=(0,u.createVarsResolver)((e,{levelOffset:t})=>({root:{"--level-offset":(0,c.getSpacing)(t)}})),z=(0,h.factory)(e=>{let t=(0,p.useProps)("Tree",D,e),{classNames:a,className:o,style:n,styles:l,unstyled:r,vars:s,data:i,expandOnClick:d,tree:c,renderNode:u,selectOnClick:h,clearSelectionOnOutsideClick:g,allowRangeSelection:v,expandOnSpace:f,levelOffset:y,checkOnSpace:I,keepMounted:z,onDragDrop:P,allowDrop:w,withDragHandle:E,withLines:O,attributes:A,ref:G,...L}=t,R=(0,j.useTree)(),M=c||R,_=(0,b.useRef)({draggedValue:null,currentDropTarget:null}),B=(0,m.useStyles)({name:"Tree",classes:N,props:t,className:o,style:n,classNames:a,styles:l,unstyled:r,attributes:A,vars:s,varsResolver:C}),H=(0,F.useMergedRef)(G,(0,S.useClickOutside)(()=>g&&M.clearSelected())),$=(0,b.useMemo)(()=>(function e(t){return t.reduce((t,a)=>(t.push(a.value),a.children&&t.push(...e(a.children)),t),[])})(i),[i]);(0,b.useEffect)(()=>{M.initialize(i)},[i]);let q=i.map((e,t)=>(0,T.jsx)(k,{node:e,getStyles:B,rootIndex:t,expandOnClick:d,selectOnClick:h,controller:M,renderNode:u,flatValues:$,allowRangeSelection:v,expandOnSpace:f,checkOnSpace:I,keepMounted:z,onDragDrop:P,allowDrop:w,withDragHandle:E,dragStateRef:_,data:i},e.value));return(0,T.jsx)(x.Box,{component:"ul",ref:H,...B("root"),...L,role:"tree","aria-multiselectable":M.multiple,"data-tree-root":!0,"data-with-lines":O||void 0,children:q})});function P({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}z.displayName="@mantine/core/Tree",z.classes=N,z.varsResolver=C;let w={type:"code",component:function(){return(0,T.jsx)(z,{data:n,withLines:!0,renderNode:e=>(0,T.jsx)(P,{...e})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { data } from './data';

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  return <Tree data={data} withLines renderNode={(payload) => <Leaf {...payload} />} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var E={root:"m_78f70933",leaf:"m_78f427af"},O=e.i(56206),A=e.i(271270),G=e.i(419122),L=e.i(392211);function R({name:e,isFolder:t,expanded:a}){return e.endsWith("package.json")?(0,T.jsx)(G.NpmIcon,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,T.jsx)(L.TypeScriptCircleIcon,{size:14}):e.endsWith(".css")?(0,T.jsx)(A.CssIcon,{size:14}):t?a?(0,T.jsx)(s.FolderOpenIcon,{color:"var(--mantine-color-yellow-9)",size:14}):(0,T.jsx)(i.FolderSimpleIcon,{color:"var(--mantine-color-yellow-9)",size:14}):null}function M({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,className:(0,O.default)(E.leaf,o.className),children:[(0,T.jsx)(R,{name:e.value,isFolder:a,expanded:t}),(0,T.jsx)("span",{children:e.label})]})}let _={type:"code",component:function(){return(0,T.jsx)(z,{classNames:E,selectOnClick:!0,clearSelectionOnOutsideClick:!0,withLines:!0,data:n,renderNode:e=>(0,T.jsx)(M,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FolderSimpleIcon, FolderOpenIcon } from '@phosphor-icons/react';
import cx from 'clsx';
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
    <Group gap={6} {...elementProps} className={cx(classes.leaf, elementProps.className)}>
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
      withLines
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
  padding-inline-start: calc(var(--label-offset) + 4px);
  padding-inline-end: 4px;

  &[data-selected] {
    font-weight: 700;
    background-color: var(--mantine-color-blue-light) !important;
    color: var(--mantine-color-bright);
  }

  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
    color: var(--mantine-color-bright);
  }
}`},{fileName:"data.ts",language:"tsx",code:l}]};var B=e.i(89495),H=e.i(719834),$=e.i(841054),q=e.i(823439),V=e.i(658109),W=e.i(257177),K=e.i(754067),U=e.i(610287),Y=e.i(841209),Q=e.i(401570);function J(e,t){let a,{draggedNode:o,targetNode:n,position:l}=t;if(o===n||!(0,f.findTreeNode)(n,e)||(a=(0,f.findTreeNode)(o,e))&&a.children&&function e(t){for(let a of t)if(a.value===n||a.children&&e(a.children))return!0;return!1}(a.children))return e;let{data:r,removed:s}=function e(t,a){let o=null;return{data:t.reduce((t,n)=>{if(n.value===a)return o={...n},t;if(n.children){let l=e(n.children,a);l.removed?(o=l.removed,t.push({...n,children:l.data})):t.push(n)}else t.push(n);return t},[]),removed:o}}(e,o);return s?function e(t,a,o,n){if("inside"===n)return t.map(t=>t.value===o?{...t,children:[...t.children||[],a]}:t.children?{...t,children:e(t.children,a,o,n)}:t);let l=t.findIndex(e=>e.value===o);if(-1!==l){let e=[...t];return e.splice("before"===n?l:l+1,0,a),e}return t.map(t=>t.children?{...t,children:e(t.children,a,o,n)}:t)}(r,s,n,l):e}let X=[{label:"Getting started",value:"getting-started",children:[{label:"Introduction",value:"getting-started/introduction"},{label:"Installation",value:"getting-started/installation"},{label:"Quick start",value:"getting-started/quick-start"}]},{label:"Components",value:"components",children:[{label:"Inputs",value:"components/inputs",children:[{label:"Button",value:"components/inputs/button"},{label:"TextInput",value:"components/inputs/text-input"},{label:"Select",value:"components/inputs/select"}]},{label:"Navigation",value:"components/navigation",children:[{label:"Tabs",value:"components/navigation/tabs"},{label:"Menu",value:"components/navigation/menu"}]}]},{label:"Hooks",value:"hooks",children:[{label:"use-toggle",value:"hooks/use-toggle"},{label:"use-click-outside",value:"hooks/use-click-outside"}]}];function Z({node:e,expanded:t,hasChildren:a,elementProps:o,search:n}){let l="string"==typeof e.label?e.label:e.value;return(0,T.jsxs)(d.Group,{gap:6,...o,className:(0,O.default)("m_b0c2db50",o.className),children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{flexShrink:0,opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{flexShrink:0,opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{flexShrink:0,opacity:.75}}),(0,T.jsx)(K.Highlight,{component:"span",highlight:n,className:"m_8b1e1aea",children:l}),a&&(0,T.jsx)(W.Badge,{size:"xs",radius:"sm",variant:"default",className:"m_8aa5ed05",children:function e(t){return t.children?t.children.reduce((t,a)=>t+e(a),0):1}(e)}),(0,T.jsxs)(U.Menu,{position:"bottom-end",shadow:"md",width:140,withinPortal:!0,children:[(0,T.jsx)(U.Menu.Target,{children:(0,T.jsx)(V.ActionIcon,{variant:"subtle",color:"gray",size:"xs",className:"m_fa87bf73",onClick:e=>e.stopPropagation(),draggable:!1,"aria-label":`Actions for ${l}`,children:(0,T.jsx)(B.DotsThreeIcon,{size:14,weight:"bold"})})}),(0,T.jsxs)(U.Menu.Dropdown,{children:[(0,T.jsx)(U.Menu.Item,{leftSection:(0,T.jsx)($.PencilSimpleIcon,{size:14}),children:"Rename"}),(0,T.jsx)(U.Menu.Item,{leftSection:(0,T.jsx)(q.TrashIcon,{size:14}),color:"red",children:"Delete"})]})]})]})}let ee={type:"code",component:function(){let[e,t]=(0,b.useState)(X),[a,o]=(0,b.useState)(""),n=(0,j.useTree)({initialSelectedState:["components/inputs/button"],initialExpandedState:(0,j.getTreeExpandedState)(X,["components","components/inputs"])}),l=(0,b.useMemo)(()=>a.trim()?(0,Q.filterTreeData)(e,a):e,[e,a]);return(0,T.jsxs)("div",{children:[(0,T.jsx)(Y.TextInput,{leftSection:(0,T.jsx)(H.MagnifyingGlassIcon,{size:14}),placeholder:"Search docs...",mb:"sm",value:a,onChange:t=>{var a;o(a=t.currentTarget.value),a.trim()&&n.setExpandedState((0,j.getTreeExpandedState)((0,Q.filterTreeData)(e,a),"*"))}}),(0,T.jsx)(z,{classNames:{root:"m_67988e2c"},data:l,tree:n,withLines:!0,selectOnClick:!0,clearSelectionOnOutsideClick:!0,onDragDrop:e=>t(t=>J(t,e)),renderNode:e=>(0,T.jsx)(Z,{...e,search:a})})]})},centered:!0,maxWidth:360,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useMemo, useState } from 'react';
import {
  DotsThreeIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
  MagnifyingGlassIcon,
  PencilSimpleIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import cx from 'clsx';
import {
  ActionIcon,
  Badge,
  filterTreeData,
  getTreeExpandedState,
  Group,
  Highlight,
  Menu,
  moveTreeNode,
  RenderTreeNodePayload,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function countPages(node: TreeNodeData): number {
  if (!node.children) {
    return 1;
  }
  return node.children.reduce((sum, child) => sum + countPages(child), 0);
}

interface LeafProps extends RenderTreeNodePayload {
  search: string;
}

function Leaf({ node, expanded, hasChildren, elementProps, search }: LeafProps) {
  const label = typeof node.label === 'string' ? node.label : node.value;

  return (
    <Group gap={6} {...elementProps} className={cx(classes.row, elementProps.className)}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
      )}

      <Highlight component="span" highlight={search} className={classes.label}>
        {label}
      </Highlight>

      {hasChildren && (
        <Badge size="xs" radius="sm" variant="default" className={classes.count}>
          {countPages(node)}
        </Badge>
      )}

      <Menu position="bottom-end" shadow="md" width={140} withinPortal>
        <Menu.Target>
          <ActionIcon
            variant="subtle"
            color="gray"
            size="xs"
            className={classes.actions}
            onClick={(event) => event.stopPropagation()}
            draggable={false}
            aria-label={\`Actions for \${label}\`}
          >
            <DotsThreeIcon size={14} weight="bold" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item leftSection={<PencilSimpleIcon size={14} />}>Rename</Menu.Item>
          <Menu.Item leftSection={<TrashIcon size={14} />} color="red">
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(data);
  const [search, setSearch] = useState('');
  const tree = useTree({
    initialSelectedState: ['components/inputs/button'],
    initialExpandedState: getTreeExpandedState(data, ['components', 'components/inputs']),
  });

  const filteredData = useMemo(
    () => (search.trim() ? filterTreeData(treeData, search) : treeData),
    [treeData, search]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      tree.setExpandedState(getTreeExpandedState(filterTreeData(treeData, value), '*'));
    }
  };

  return (
    <div>
      <TextInput
        leftSection={<MagnifyingGlassIcon size={14} />}
        placeholder="Search docs..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        classNames={{ root: classes.root }}
        data={filteredData}
        tree={tree}
        withLines
        selectOnClick
        clearSelectionOnOutsideClick
        onDragDrop={(payload) => setTreeData((current) => moveTreeNode(current, payload))}
        renderNode={(payload) => <Leaf {...payload} search={search} />}
      />
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  font-size: 13px;
}

.row {
  padding-block: 3px;
  padding-inline-end: 4px;

  &[data-selected] {
    background-color: var(--mantine-color-blue-light) !important;
    color: var(--mantine-color-bright);
  }

  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));

    .actions {
      opacity: 1;
    }

    .count {
      opacity: 0;
    }
  }
}

.label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.count {
  transition: opacity 100ms ease;
}

.actions {
  opacity: 0;
  transition: opacity 100ms ease;
}`},{fileName:"data.ts",language:"tsx",code:`import { TreeNodeData } from '@mantine/core';

export const data: TreeNodeData[] = [
  {
    label: 'Getting started',
    value: 'getting-started',
    children: [
      { label: 'Introduction', value: 'getting-started/introduction' },
      { label: 'Installation', value: 'getting-started/installation' },
      { label: 'Quick start', value: 'getting-started/quick-start' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      {
        label: 'Inputs',
        value: 'components/inputs',
        children: [
          { label: 'Button', value: 'components/inputs/button' },
          { label: 'TextInput', value: 'components/inputs/text-input' },
          { label: 'Select', value: 'components/inputs/select' },
        ],
      },
      {
        label: 'Navigation',
        value: 'components/navigation',
        children: [
          { label: 'Tabs', value: 'components/navigation/tabs' },
          { label: 'Menu', value: 'components/navigation/menu' },
        ],
      },
    ],
  },
  {
    label: 'Hooks',
    value: 'hooks',
    children: [
      { label: 'use-toggle', value: 'hooks/use-toggle' },
      { label: 'use-click-outside', value: 'hooks/use-click-outside' },
    ],
  },
];`}]};function et({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let ea={type:"code",component:function(){return(0,T.jsx)(z,{data:n,withLines:!0,renderNode:e=>(0,T.jsx)(et,{...e})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { data } from './data';

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  return <Tree data={data} withLines renderNode={(payload) => <Leaf {...payload} />} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var eo=e.i(485108);function en({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let el={type:"code",component:function(){let e=(0,j.useTree)();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(z,{data:n,tree:e,withLines:!0,renderNode:e=>(0,T.jsx)(en,{...e})}),(0,T.jsxs)(d.Group,{mt:"md",children:[(0,T.jsx)(eo.Button,{onClick:()=>e.expandAllNodes(),children:"Expand all"}),(0,T.jsx)(eo.Button,{onClick:()=>e.collapseAllNodes(),children:"Collapse all"})]})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Button, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const tree = useTree();

  return (
    <>
      <Tree data={data} tree={tree} withLines renderNode={(payload) => <Leaf {...payload} />} />
      <Group mt="md">
        <Button onClick={() => tree.expandAllNodes()}>Expand all</Button>
        <Button onClick={() => tree.collapseAllNodes()}>Collapse all</Button>
      </Group>
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var er=e.i(37541);let es=({node:e,expanded:t,hasChildren:a,isRoot:o,elementProps:n,tree:l})=>{let c=l.isNodeChecked(e.value),u=l.isNodeIndeterminate(e.value);return(0,T.jsxs)(d.Group,{gap:"xs",...n,children:[(0,T.jsx)(er.Checkbox.Indicator,{checked:c,size:"xs",indeterminate:u,mis:o?void 0:2,onClick:()=>c?l.uncheckNode(e.value):l.checkNode(e.value)}),(0,T.jsxs)(d.Group,{gap:6,onClick:()=>l.toggleExpanded(e.value),children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})]})},ei={type:"code",component:function(){return(0,T.jsx)(z,{data:n,levelOffset:23,expandOnClick:!1,withLines:!0,renderNode:es})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  isRoot,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        indeterminate={indeterminate}
        mis={isRoot ? undefined : 2}
        onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
      />

      <Group gap={6} onClick={() => tree.toggleExpanded(node.value)}>
        {hasChildren ? (
          expanded ? (
            <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
          ) : (
            <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
          )
        ) : (
          <FileTextIcon size={14} style={{ opacity: 0.75 }} />
        )}
        <span>{node.label}</span>
      </Group>
    </Group>
  );
};

function Demo() {
  return (
    <Tree
      data={data}
      levelOffset={23}
      expandOnClick={false}
      withLines
      renderNode={renderTreeNode}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};function ed({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let ec={type:"code",component:function(){return(0,T.jsx)(z,{data:n,tree:(0,j.useTree)({initialExpandedState:(0,j.getTreeExpandedState)(n,["src","src/components"])}),withLines:!0,renderNode:e=>(0,T.jsx)(ed,{...e})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  Tree,
  useTree,
} from '@mantine/core';
import { data } from './data';

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, ['src', 'src/components']),
  });

  return <Tree data={data} tree={tree} withLines renderNode={(payload) => <Leaf {...payload} />} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]},eu=({node:e,expanded:t,hasChildren:a,isRoot:o,elementProps:n,tree:l})=>{let c=l.isNodeChecked(e.value),u=l.isNodeIndeterminate(e.value);return(0,T.jsxs)(d.Group,{gap:"xs",...n,children:[(0,T.jsx)(er.Checkbox.Indicator,{checked:c,size:"xs",indeterminate:u,mis:o?void 0:2,onClick:()=>c?l.uncheckNode(e.value):l.checkNode(e.value)}),(0,T.jsxs)(d.Group,{gap:6,onClick:()=>l.toggleExpanded(e.value),children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})]})},ep={type:"code",component:function(){let e=(0,j.useTree)({initialExpandedState:(0,j.getTreeExpandedState)(n,"*"),initialCheckedState:["node_modules","node_modules/@mantine/core/index.d.ts","node_modules/@mantine/form/package.json"]});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(d.Group,{mb:"md",children:[(0,T.jsx)(eo.Button,{onClick:()=>e.checkAllNodes(),children:"Check all"}),(0,T.jsx)(eo.Button,{onClick:()=>e.uncheckAllNodes(),children:"Uncheck all"})]}),(0,T.jsx)(z,{tree:e,data:n,levelOffset:23,expandOnClick:!1,withLines:!0,renderNode:eu})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
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
  isRoot,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        indeterminate={indeterminate}
        mis={isRoot ? undefined : 2}
        onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
      />

      <Group gap={6} onClick={() => tree.toggleExpanded(node.value)}>
        {hasChildren ? (
          expanded ? (
            <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
          ) : (
            <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
          )
        ) : (
          <FileTextIcon size={14} style={{ opacity: 0.75 }} />
        )}
        <span>{node.label}</span>
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
        <Button onClick={() => tree.checkAllNodes()}>Check all</Button>
        <Button onClick={() => tree.uncheckAllNodes()}>Uncheck all</Button>
      </Group>

      <Tree
        tree={tree}
        data={data}
        levelOffset={23}
        expandOnClick={false}
        withLines
        renderNode={renderTreeNode}
      />
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]},em=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"},{label:"contact.tsx",value:"pages/contact.tsx"}]},{label:"Components",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"},{label:"Sidebar.tsx",value:"components/Sidebar.tsx"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}];function eh({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let ex={type:"code",component:function(){let[e,t]=(0,b.useState)(em);return(0,T.jsx)(z,{data:e,withLines:!0,onDragDrop:e=>t(t=>J(t,e)),renderNode:e=>(0,T.jsx)(eh,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
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
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
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
      withLines
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},eg=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"}]},{label:"Components (locked)",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"}]},{label:"package.json",value:"package.json"}],ev=e=>"components"===e||e.startsWith("components/");function ef({node:e,expanded:t,hasChildren:a,elementProps:o}){let n=ev(e.value);return(0,T.jsxs)(d.Group,{gap:6,...o,draggable:!n&&o.draggable,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let eb={type:"code",component:function(){let[e,t]=(0,b.useState)(eg);return(0,T.jsx)(z,{data:e,withLines:!0,allowDrop:({draggedNode:e,targetNode:t,position:a})=>!ev(e)&&("components"!==t||"inside"!==a)&&!t.startsWith("components/"),onDragDrop:e=>t(t=>J(t,e)),renderNode:e=>(0,T.jsx)(ef,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
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

const isLocked = (value: string) => value === 'components' || value.startsWith('components/');

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  const locked = isLocked(node.value);

  return (
    <Group gap={6} {...elementProps} draggable={!locked && elementProps.draggable}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
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
      withLines
      // Locked items can't be dragged (also enforced by \`draggable={false}\` in the
      // Leaf above), items inside the "components" branch can't be drop targets,
      // and the "components" folder itself only accepts siblings before/after — not
      // dropping items inside it.
      allowDrop={({ draggedNode, targetNode, position }) => {
        if (isLocked(draggedNode)) {
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
`};var ey=e.i(414124);let eT=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"}]},{label:"Components",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"}]},{label:"package.json",value:"package.json"}];function eI({node:e,expanded:t,hasChildren:a,elementProps:o,dragHandleProps:n}){return(0,T.jsxs)(d.Group,{gap:4,...o,children:[(0,T.jsx)("button",{type:"button",...n,className:"m_789a2a4f","aria-label":"Drag to reorder",children:(0,T.jsx)(ey.DotsSixVerticalIcon,{size:14,weight:"bold"})}),a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let ek={type:"code",component:function(){let[e,t]=(0,b.useState)(eT);return(0,T.jsx)(z,{data:e,withDragHandle:!0,withLines:!0,onDragDrop:e=>t(t=>J(t,e)),renderNode:e=>(0,T.jsx)(eI,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import {
  DotsSixVerticalIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
} from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';
import classes from './Demo.module.css';

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

function Leaf({
  node,
  expanded,
  hasChildren,
  elementProps,
  dragHandleProps,
}: RenderTreeNodePayload) {
  return (
    <Group gap={4} {...elementProps}>
      <button
        type="button"
        {...dragHandleProps}
        className={classes.handle}
        aria-label="Drag to reorder"
      >
        <DotsSixVerticalIcon size={14} weight="bold" />
      </button>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
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
      withLines
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.handle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 22px;
  padding: 0;
  border: 0;
  background: transparent;
  border-radius: var(--mantine-radius-sm);
  color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  cursor: grab;
  transition:
    background-color 100ms ease,
    color 100ms ease;
}

.handle:hover {
  background-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  color: light-dark(var(--mantine-color-gray-9), var(--mantine-color-dark-0));
}

.handle:active {
  cursor: grabbing;
  background-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
}`}]},ej=[{label:"Documents",value:"documents",hasChildren:!0},{label:"Photos",value:"photos",hasChildren:!0},{label:"README.md",value:"readme"}];async function eN(e){return await new Promise(e=>{setTimeout(e,1e3)}),[{label:`${e}/file-1.txt`,value:`${e}/file-1.txt`},{label:`${e}/file-2.txt`,value:`${e}/file-2.txt`},{label:`${e}/subfolder`,value:`${e}/subfolder`,hasChildren:!0}]}function eS({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,wrap:"nowrap",...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{flexShrink:0,opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{flexShrink:0,opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{flexShrink:0,opacity:.75}}),(0,T.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]})}let eF={type:"code",component:function(){let[e,t]=(0,b.useState)(ej);return(0,T.jsx)(z,{data:e,tree:(0,j.useTree)({onLoadChildren:async e=>{let a=await eN(e);t(t=>(function e(t,a,o){let n=!1,l=t.map(t=>{if(t.value===a){n=!0;let e={...t,children:o};return delete e.hasChildren,e}if(Array.isArray(t.children)){let l=e(t.children,a,o);if(l!==t.children)return n=!0,{...t,children:l}}return t});return n?l:t})(t,e,a))}}),withLines:!0,renderNode:e=>(0,T.jsx)(eS,{...e})})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
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

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} wrap="nowrap" {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
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
      withLines
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`},eD=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],eC={type:"code",component:function(){let[e,t]=(0,b.useState)(""),a=(0,j.useTree)({initialExpandedState:(0,j.getTreeExpandedState)(eD,[])});return(0,T.jsxs)("div",{children:[(0,T.jsx)(Y.TextInput,{placeholder:"Search...",mb:"sm",value:e,onChange:e=>{var o;t(o=e.currentTarget.value),o.trim()?a.setExpandedState((0,j.getTreeExpandedState)(eD,function e(t,a){let o=[];for(let n of t){let t=n.children?e(n.children,a):[];((0,Q.defaultTreeNodeFilter)(a,n)||t.length>0)&&o.push(n.value,...t)}return o}(eD,o))):a.collapseAllNodes()}}),(0,T.jsx)(z,{data:eD,tree:a,withLines:!0,renderNode:({node:t,elementProps:a,hasChildren:o,expanded:n})=>{let l="string"==typeof t.label?t.label:t.value;return(0,T.jsxs)(d.Group,{gap:6,...a,children:[o?n?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)(K.Highlight,{highlight:e,component:"span",children:l})]})}})]})},centered:!0,maxWidth:340,code:`
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  defaultTreeNodeFilter,
  getTreeExpandedState,
  Group,
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
        withLines
        renderNode={({ node, elementProps, hasChildren, expanded }) => {
          const label =
            typeof node.label === 'string' ? node.label : node.value;
          return (
            <Group gap={6} {...elementProps}>
              {hasChildren ? (
                expanded ? (
                  <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
                ) : (
                  <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
                )
              ) : (
                <FileTextIcon size={14} style={{ opacity: 0.75 }} />
              )}
              <Highlight highlight={search} component="span">
                {label}
              </Highlight>
            </Group>
          );
        }}
      />
    </div>
  );
}
`},ez=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}];function eP({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let ew={type:"code",component:function(){let[e,t]=(0,b.useState)(""),a=(0,j.useTree)(),o=(0,b.useMemo)(()=>(0,Q.filterTreeData)(ez,e),[e]);return(0,T.jsxs)("div",{children:[(0,T.jsx)(Y.TextInput,{placeholder:"Search...",mb:"sm",value:e,onChange:e=>(e=>{if(t(e),e.trim()){let t=(0,Q.filterTreeData)(ez,e);a.setExpandedState((0,j.getTreeExpandedState)(t,"*"))}else a.collapseAllNodes()})(e.currentTarget.value)}),(0,T.jsx)(z,{data:o,tree:a,withLines:!0,renderNode:e=>(0,T.jsx)(eP,{...e})})]})},centered:!0,maxWidth:340,code:`
import { useMemo, useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  filterTreeData,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
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

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

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
      <Tree
        data={filteredData}
        tree={tree}
        withLines
        renderNode={(payload) => <Leaf {...payload} />}
      />
    </div>
  );
}
`};var eE=e.i(280130);let eO=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}];function eA({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let eG={type:"code",component:function(){let[e,t]=(0,b.useState)(""),a=(0,j.useTree)(),o=(0,b.useMemo)(()=>{let e;return e=new eE.default(function e(t){return t.reduce((t,a)=>(t.push(a),a.children&&t.push(...e(a.children)),t),[])}(eO),{keys:["label"],threshold:.3}),(t,a)=>e.search(t).some(e=>e.item.value===a.value)},[]),n=(0,b.useMemo)(()=>(0,Q.filterTreeData)(eO,e,o),[e,o]);return(0,T.jsxs)("div",{children:[(0,T.jsx)(Y.TextInput,{placeholder:"Fuzzy search...",mb:"sm",value:e,onChange:e=>(e=>{if(t(e),e.trim()){let t=(0,Q.filterTreeData)(eO,e,o);a.setExpandedState((0,j.getTreeExpandedState)(t,"*"))}else a.collapseAllNodes()})(e.currentTarget.value)}),(0,T.jsx)(z,{data:n,tree:a,withLines:!0,renderNode:e=>(0,T.jsx)(eA,{...e})})]})},centered:!0,maxWidth:340,code:`
import { useMemo, useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import Fuse from 'fuse.js';
import {
  filterTreeData,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
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

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
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
      <Tree
        data={filteredData}
        tree={tree}
        withLines
        renderNode={(payload) => <Leaf {...payload} />}
      />
    </div>
  );
}
`};function eL({node:e,expanded:t,hasChildren:a,elementProps:o}){return(0,T.jsxs)(d.Group,{gap:6,...o,children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})}let eR={type:"code",component:function(){return(0,T.jsx)(z,{data:n,tree:(0,j.useTree)({initialExpandedState:(0,j.getTreeExpandedState)(n,"*")}),withLines:!0,renderNode:e=>(0,T.jsx)(eL,{...e})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  Tree,
  useTree,
} from '@mantine/core';
import { data } from './data';

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
  });

  return <Tree data={data} tree={tree} withLines renderNode={(payload) => <Leaf {...payload} />} />;
}
`},{fileName:"data.ts",language:"tsx",code:l}]},eM=(0,b.memo)(function({node:e,level:t,parent:a,hasChildren:o,expanded:n,tree:l,expandOnClick:r=!0,selectOnClick:s,expandOnSpace:i=!0,checkOnSpace:d,renderNode:c,style:u,tabIndex:p=-1,linesPath:m}){let h=(0,b.useRef)(null),x=l.isNodeLoading(e.value),v=l.getNodeLoadError(e.value),f=l.selectedState.includes(e.value),y={className:N.label,style:{},onClick:t=>{t.stopPropagation(),r&&o&&l.toggleExpanded(e.value),s&&l.select(e.value),h.current?.focus()},"data-selected":f||void 0,"data-value":e.value};return(0,T.jsxs)("div",{ref:h,className:N.node,style:{"--label-offset":`calc(var(--level-offset, var(--mantine-spacing-lg)) * ${t-1})`,...u},role:"treeitem","aria-selected":f,"aria-expanded":o?n:void 0,"data-value":e.value,"data-selected":f||void 0,"data-level":t,tabIndex:p,onKeyDown:t=>{if("ArrowRight"===t.nativeEvent.code)if(t.stopPropagation(),t.preventDefault(),n&&o){let e=(0,g.findElementAncestor)(t.currentTarget,"[data-tree-root]"),a=e?Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display):[],o=a.indexOf(t.currentTarget);-1!==o&&a[o+1]?.focus()}else o&&l.expand(e.value);if("ArrowLeft"===t.nativeEvent.code&&(t.stopPropagation(),t.preventDefault(),n&&o?l.collapse(e.value):a&&(0,g.findElementAncestor)(t.currentTarget,"[data-tree-root]")?.querySelector(`[role=treeitem][data-value="${CSS.escape(a)}"]`)?.focus()),"ArrowDown"===t.nativeEvent.code||"ArrowUp"===t.nativeEvent.code){let e=(0,g.findElementAncestor)(t.currentTarget,"[data-tree-root]");if(!e)return;t.stopPropagation(),t.preventDefault();let a=Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display),o=a.indexOf(t.currentTarget);if(-1===o)return;a["ArrowDown"===t.nativeEvent.code?o+1:o-1]?.focus()}"Space"===t.nativeEvent.code&&(i&&(t.stopPropagation(),t.preventDefault(),l.toggleExpanded(e.value)),d&&(t.stopPropagation(),t.preventDefault(),l.isNodeChecked(e.value)?l.uncheckNode(e.value):l.checkNode(e.value)))},children:[m?.map((e,t)=>{if("none"===e)return null;let a=t+2;return(0,T.jsx)("span",{"aria-hidden":!0,className:`${N.flatLine}${"closing"===e?` ${N.flatLineClosing}`:""}`,style:{"--flat-line-column":a}},a)}),"function"==typeof c?c({node:e,level:t,selected:f,isRoot:1===t,tree:l,expanded:n,hasChildren:o,isLoading:x,loadError:v,elementProps:y,dragHandleProps:void 0}):(0,T.jsx)("div",{...y,children:e.label})]})});eM.displayName="@mantine/core/FlatTreeNode";var e_=e.i(463044);let eB=`
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
        data-with-lines
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
`,eH=(a=0,!function e(t,o,n){let l=0===o?20:Math.floor(8*Math.random())+2;for(let r=0;r<l&&n.count>0;r++){a++,n.count--;let l=o<3&&n.count>0&&Math.random()>.3,r={label:`${l?"Folder":"File"} ${a}`,value:`node-${a}`,children:l?[]:void 0};l&&e(r.children,o+1,n),t.push(r)}}(t=[],0,{count:2e3}),t),e$=(0,j.getTreeExpandedState)(eH,"*"),eq={type:"code",component:function(){let e=(0,j.useTree)({initialExpandedState:e$}),t=(0,b.useMemo)(()=>{var t;let a;return t=e.expandedState,!function e(t,a,o,n,l,r){for(let s=0;s<a.length;s++){let i=a[s],d=s===a.length-1,c=Array.isArray(i.children),u=!!i.hasChildren&&!c,p=c||u,m=o[i.value]||!1,h=[];for(let e=2;e<=l;e++)e===l?h.push(d?"closing":"continuing"):h.push(r[e-1]?"none":"continuing");t.push({node:i,level:l,parent:n,hasChildren:p,expanded:m,linesPath:h}),m&&c&&e(t,i.children,o,i.value,l+1,[...r,d])}}(a=[],eH,t,null,1,[]),a},[e.expandedState]),a=(0,b.useRef)(null),o=(0,e_.useVirtualizer)({count:t.length,getScrollElement:()=>a.current,estimateSize:()=>30,overscan:20});return(0,T.jsx)("div",{ref:a,style:{height:400,overflow:"auto"},children:(0,T.jsx)("div",{"data-tree-root":!0,"data-with-lines":!0,role:"tree",style:{height:o.getTotalSize(),position:"relative"},children:o.getVirtualItems().map(a=>(0,T.jsx)(eM,{...t[a.index],tree:e,expandOnClick:!0,selectOnClick:!0,tabIndex:0===a.index?0:-1,style:{position:"absolute",top:0,left:0,width:"100%",height:a.size,transform:`translateY(${a.start}px)`}},t[a.index].node.value))})})},code:eB,defaultExpanded:!1},eV=({node:e,expanded:t,hasChildren:a,isRoot:o,elementProps:n,tree:l})=>{let c=l.isNodeChecked(e.value);return(0,T.jsxs)(d.Group,{gap:"xs",...n,children:[(0,T.jsx)(er.Checkbox.Indicator,{checked:c,size:"xs",mis:o?void 0:2,onClick:()=>c?l.uncheckNode(e.value):l.checkNode(e.value)}),(0,T.jsxs)(d.Group,{gap:6,onClick:()=>l.toggleExpanded(e.value),children:[a?t?(0,T.jsx)(s.FolderOpenIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(i.FolderSimpleIcon,{size:14,style:{opacity:.75}}):(0,T.jsx)(r.FileTextIcon,{size:14,style:{opacity:.75}}),(0,T.jsx)("span",{children:e.label})]})]})},eW={type:"code",component:function(){return(0,T.jsx)(z,{data:n,tree:(0,j.useTree)({checkStrictly:!0}),levelOffset:23,expandOnClick:!1,withLines:!0,renderNode:eV})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  isRoot,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        mis={isRoot ? undefined : 2}
        onClick={() =>
          checked
            ? tree.uncheckNode(node.value)
            : tree.checkNode(node.value)
        }
      />

      <Group gap={6} onClick={() => tree.toggleExpanded(node.value)}>
        {hasChildren ? (
          expanded ? (
            <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
          ) : (
            <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
          )
        ) : (
          <FileTextIcon size={14} style={{ opacity: 0.75 }} />
        )}
        <span>{node.label}</span>
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
      withLines
      renderNode={renderTreeNode}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}]};var eK=(0,o.__exportAll)({asyncLoading:()=>eF,checkAllNodes:()=>ep,checkStrictly:()=>eW,checked:()=>ei,controller:()=>el,docsEditor:()=>ee,dragDrop:()=>ex,dragDropAllow:()=>eb,dragDropHandle:()=>ek,expandedState:()=>ec,files:()=>_,lines:()=>eR,renderNode:()=>ea,searchFilter:()=>ew,searchFuzzy:()=>eG,searchHighlight:()=>eC,usage:()=>w,virtualized:()=>eq});e.s(["TreeDemos",0,eK],83967)}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83967,e=>{"use strict";let t,a;var n=e.i(648863);let r=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],o=`import { TreeNodeData } from '@mantine/core';

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
];`;var l=e.i(433512),s=e.i(481178),d=e.i(44091),c=e.i(391466),i=e.i(275519),u=e.i(232471),p=e.i(262055),m=e.i(935769),h=e.i(96618),v=e.i(191788);let g={elementProps:{},dragHandleProps:void 0};var f=e.i(391398);function x(e,t,a){if(!e||!t)return[];let n=a.indexOf(e),r=a.indexOf(t),o=Math.min(n,r),l=Math.max(n,r);return a.slice(o,l+1)}function b({node:e,getStyles:t,rootIndex:a,controller:n,expandOnClick:r,selectOnClick:o,isSubtree:l,level:s=1,renderNode:d,flatValues:c,allowRangeSelection:i,expandOnSpace:T,checkOnSpace:k,keepMounted:D,onDragDrop:N,allowDrop:y,withDragHandle:j,dragStateRef:C,data:S}){let A=(0,v.useRef)(null),E=Array.isArray(e.children),I=!!e.hasChildren&&!E,w=E||I,P=n.isNodeLoading(e.value),M=n.getNodeLoadError(e.value),z=n.expandedState[e.value]||!1,F=(e.children||[]).map(e=>(0,f.jsx)(b,{node:e,flatValues:c,getStyles:t,rootIndex:void 0,level:s+1,controller:n,expandOnClick:r,isSubtree:!0,renderNode:d,selectOnClick:o,allowRangeSelection:i,expandOnSpace:T,checkOnSpace:k,keepMounted:D,onDragDrop:N,allowDrop:y,withDragHandle:j,dragStateRef:C,data:S},e.value)),{elementProps:G,dragHandleProps:Z}=function({nodeValue:e,hasChildren:t,data:a,onDragDrop:n,dragStateRef:r,allowDrop:o,withDragHandle:l}){let[s,d]=(0,v.useState)(!1);return((0,v.useEffect)(()=>{if(!l||!s)return;let e=()=>d(!1);return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)},[l,s]),n)?{elementProps:{draggable:!l||s,onDragStart:t=>{if(l&&!s)return;t.stopPropagation(),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",e),r.current.draggedValue=e;let a=t.currentTarget;requestAnimationFrame(()=>{a.setAttribute("data-dragging","true")})},onDragOver:n=>{var l,s,d;let c,i,u,p,m=r.current.draggedValue;if(!m||m===e||(p=(0,h.findTreeNode)(m,a))&&p.children&&function t(a){for(let n of a)if(n.value===e||n.children&&t(n.children))return!0;return!1}(p.children))return;let v=n.currentTarget,g=(l=n,s=v,d=t,c=s.getBoundingClientRect(),i=l.clientY-c.top,u=c.height,d?i<.25*u?"before":i>.75*u?"after":"inside":i<.5*u?"before":"after");if(o&&!o({draggedNode:m,targetNode:e,position:g})){let e=r.current.currentDropTarget;e&&e!==v&&e.removeAttribute("data-drag-over"),v.removeAttribute("data-drag-over"),r.current.currentDropTarget=null;return}n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="move";let f=r.current.currentDropTarget;f&&f!==v&&f.removeAttribute("data-drag-over"),v.setAttribute("data-drag-over",g),r.current.currentDropTarget=v},onDragLeave:e=>{let t=e.currentTarget,a=e.relatedTarget;a&&t.contains(a)||(t.removeAttribute("data-drag-over"),r.current.currentDropTarget===t&&(r.current.currentDropTarget=null))},onDrop:t=>{t.preventDefault(),t.stopPropagation();let a=t.currentTarget,l=a.getAttribute("data-drag-over");a.removeAttribute("data-drag-over");let s=r.current.draggedValue;if(s&&l&&s!==e){let t={draggedNode:s,targetNode:e,position:l};(!o||o(t))&&n(t)}r.current.draggedValue=null,r.current.currentDropTarget=null},onDragEnd:e=>{e.currentTarget.removeAttribute("data-dragging");let t=r.current.currentDropTarget;t&&t.removeAttribute("data-drag-over"),r.current.draggedValue=null,r.current.currentDropTarget=null,l&&d(!1)}},dragHandleProps:l?{onMouseDown:()=>d(!0)}:void 0}:g}({nodeValue:e.value,hasChildren:w,data:S,onDragDrop:N,dragStateRef:C,allowDrop:y,withDragHandle:j}),H=n.selectedState.includes(e.value),L={...t("label"),onClick:t=>{t.stopPropagation(),i&&t.shiftKey&&n.anchorNode?n.setSelectedState(x(n.anchorNode,e.value,c)):(r&&n.toggleExpanded(e.value),o&&n.select(e.value)),A.current?.focus()},"data-selected":H||void 0,"data-value":e.value,...G},_=z&&P&&0===F.length;return(0,f.jsxs)("li",{...t("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s-1})`}}),role:"treeitem","aria-selected":H,"data-value":e.value,"data-selected":H||void 0,"data-level":s,tabIndex:0===a?0:-1,onKeyDown:t=>{if("ArrowRight"===t.nativeEvent.code&&(t.stopPropagation(),t.preventDefault(),z?t.currentTarget.querySelector("[role=treeitem]")?.focus():n.expand(e.value)),"ArrowLeft"===t.nativeEvent.code&&(t.stopPropagation(),t.preventDefault(),z&&w?n.collapse(e.value):l&&(0,p.findElementAncestor)(t.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===t.nativeEvent.code||"ArrowUp"===t.nativeEvent.code){let e=(0,p.findElementAncestor)(t.currentTarget,"[data-tree-root]");if(!e)return;t.stopPropagation(),t.preventDefault();let a=Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display),r=a.indexOf(t.currentTarget);if(-1===r)return;let o="ArrowDown"===t.nativeEvent.code?r+1:r-1;if(a[o]?.focus(),t.shiftKey){let e=a[o];e&&n.setSelectedState(x(n.anchorNode,e.dataset.value,c))}}"Space"===t.nativeEvent.code&&(T&&(t.stopPropagation(),t.preventDefault(),n.toggleExpanded(e.value)),k&&(t.stopPropagation(),t.preventDefault(),n.isNodeChecked(e.value)?n.uncheckNode(e.value):n.checkNode(e.value)))},ref:A,children:["function"==typeof d?d({node:e,level:s,selected:H,tree:n,expanded:z,hasChildren:w,isLoading:P,loadError:M,elementProps:L,dragHandleProps:Z}):(0,f.jsx)("div",{...L,children:e.label}),_&&(0,f.jsx)(u.Box,{component:"ul",role:"group",...t("subtree"),"data-level":s,children:(0,f.jsx)("li",{...t("node",{style:{"--label-offset":`calc(var(--level-offset) * ${s})`}}),children:(0,f.jsx)("div",{...t("label"),children:(0,f.jsx)(m.Loader,{size:16})})})}),D&&F.length>0?(0,f.jsx)(v.Activity,{mode:z?"visible":"hidden",children:(0,f.jsx)(u.Box,{component:"ul",role:"group",...t("subtree"),"data-level":s,children:F})}):z&&F.length>0&&(0,f.jsx)(u.Box,{component:"ul",role:"group",...t("subtree"),"data-level":s,children:F})]})}b.displayName="@mantine/core/TreeNode";var T=e.i(127262),k={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"},D=e.i(196072),N=e.i(332977);let y={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},j=(0,s.createVarsResolver)((e,{levelOffset:t})=>({root:{"--level-offset":(0,l.getSpacing)(t)}})),C=(0,i.factory)(e=>{let t=(0,d.useProps)("Tree",y,e),{classNames:a,className:n,style:r,styles:o,unstyled:l,vars:s,data:i,expandOnClick:p,tree:m,renderNode:h,selectOnClick:g,clearSelectionOnOutsideClick:x,allowRangeSelection:C,expandOnSpace:S,levelOffset:A,checkOnSpace:E,keepMounted:I,onDragDrop:w,allowDrop:P,withDragHandle:M,withLines:z,attributes:F,ref:G,...Z}=t,H=(0,T.useTree)(),L=m||H,_=(0,v.useRef)({draggedValue:null,currentDropTarget:null}),O=(0,c.useStyles)({name:"Tree",classes:k,props:t,className:n,style:r,classNames:a,styles:o,unstyled:l,attributes:F,vars:s,varsResolver:j}),V=(0,N.useMergedRef)(G,(0,D.useClickOutside)(()=>x&&L.clearSelected())),B=(0,v.useMemo)(()=>(function e(t){return t.reduce((t,a)=>(t.push(a.value),a.children&&t.push(...e(a.children)),t),[])})(i),[i]);(0,v.useEffect)(()=>{L.initialize(i)},[i]);let R=i.map((e,t)=>(0,f.jsx)(b,{node:e,getStyles:O,rootIndex:t,expandOnClick:p,selectOnClick:g,controller:L,renderNode:h,flatValues:B,allowRangeSelection:C,expandOnSpace:S,checkOnSpace:E,keepMounted:I,onDragDrop:w,allowDrop:P,withDragHandle:M,dragStateRef:_,data:i},e.value));return(0,f.jsx)(u.Box,{component:"ul",ref:V,...O("root"),...Z,role:"tree","aria-multiselectable":L.multiple,"data-tree-root":!0,"data-with-lines":z||void 0,children:R})});C.displayName="@mantine/core/Tree",C.classes=k,C.varsResolver=j;let S={type:"code",component:function(){return(0,f.jsx)(C,{data:r})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
`},{fileName:"data.ts",language:"tsx",code:o}]};var A={root:"m_78f70933",leaf:"m_78f427af"},E=e.i(540413),I=e.i(235209),w=e.i(725695),P=e.i(56206),M=e.i(271270),z=e.i(419122),F=e.i(392211);function G({name:e,isFolder:t,expanded:a}){return e.endsWith("package.json")?(0,f.jsx)(z.NpmIcon,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,f.jsx)(F.TypeScriptCircleIcon,{size:14}):e.endsWith(".css")?(0,f.jsx)(M.CssIcon,{size:14}):t?a?(0,f.jsx)(E.FolderOpenIcon,{color:"var(--mantine-color-yellow-9)",size:14}):(0,f.jsx)(I.FolderSimpleIcon,{color:"var(--mantine-color-yellow-9)",size:14}):null}function Z({node:e,expanded:t,hasChildren:a,elementProps:n}){return(0,f.jsxs)(w.Group,{gap:5,...n,className:(0,P.default)(A.leaf,n.className),children:[(0,f.jsx)(G,{name:e.value,isFolder:a,expanded:t}),(0,f.jsx)("span",{children:e.label})]})}let H={type:"code",component:function(){return(0,f.jsx)(C,{classNames:A,selectOnClick:!0,clearSelectionOnOutsideClick:!0,data:r,renderNode:e=>(0,f.jsx)(Z,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`},{fileName:"data.ts",language:"tsx",code:o}]};var L=e.i(931882);let _={type:"code",component:function(){return(0,f.jsx)(C,{data:r,levelOffset:23,renderNode:({node:e,expanded:t,hasChildren:a,elementProps:n})=>(0,f.jsxs)(w.Group,{gap:5,...n,children:[a&&(0,f.jsx)(L.CaretDownIcon,{size:18,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}}),(0,f.jsx)("span",{children:e.label})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"data.ts",language:"tsx",code:o}]};var O=e.i(485108);let V={type:"code",component:function(){let e=(0,T.useTree)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(C,{data:r,tree:e}),(0,f.jsxs)(w.Group,{mt:"md",children:[(0,f.jsx)(O.Button,{onClick:()=>e.expandAllNodes(),children:"Expand all"}),(0,f.jsx)(O.Button,{onClick:()=>e.collapseAllNodes(),children:"Collapse all"})]})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"data.ts",language:"tsx",code:o}]};var B=e.i(37541);let R=({node:e,expanded:t,hasChildren:a,elementProps:n,tree:r})=>{let o=r.isNodeChecked(e.value),l=r.isNodeIndeterminate(e.value);return(0,f.jsxs)(w.Group,{gap:"xs",...n,children:[(0,f.jsx)(B.Checkbox.Indicator,{checked:o,indeterminate:l,onClick:()=>o?r.uncheckNode(e.value):r.checkNode(e.value)}),(0,f.jsxs)(w.Group,{gap:5,onClick:()=>r.toggleExpanded(e.value),children:[(0,f.jsx)("span",{children:e.label}),a&&(0,f.jsx)(L.CaretDownIcon,{size:14,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}})]})]})},$={type:"code",component:function(){return(0,f.jsx)(C,{data:r,levelOffset:23,expandOnClick:!1,renderNode:R})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"data.ts",language:"tsx",code:o}]},q={type:"code",component:function(){return(0,f.jsx)(C,{data:r,tree:(0,T.useTree)({initialExpandedState:(0,T.getTreeExpandedState)(r,["src","src/components"])})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, ['src', 'src/components']),
  });

  return <Tree data={data} tree={tree} />;
}
`},{fileName:"data.ts",language:"tsx",code:o}]},W=({node:e,expanded:t,hasChildren:a,elementProps:n,tree:r})=>{let o=r.isNodeChecked(e.value),l=r.isNodeIndeterminate(e.value);return(0,f.jsxs)(w.Group,{gap:"xs",...n,children:[(0,f.jsx)(B.Checkbox.Indicator,{checked:o,indeterminate:l,onClick:()=>o?r.uncheckNode(e.value):r.checkNode(e.value)}),(0,f.jsxs)(w.Group,{gap:5,onClick:()=>r.toggleExpanded(e.value),children:[(0,f.jsx)("span",{children:e.label}),a&&(0,f.jsx)(L.CaretDownIcon,{size:14,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}})]})]})},K={type:"code",component:function(){let e=(0,T.useTree)({initialExpandedState:(0,T.getTreeExpandedState)(r,"*"),initialCheckedState:["node_modules","node_modules/@mantine/core/index.d.ts","node_modules/@mantine/form/package.json"]});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(w.Group,{mb:"md",children:[(0,f.jsx)(O.Button,{onClick:()=>e.checkAllNodes(),children:"CheckIcon all"}),(0,f.jsx)(O.Button,{onClick:()=>e.uncheckAllNodes(),children:"Uncheck all"})]}),(0,f.jsx)(C,{tree:e,data:r,levelOffset:23,expandOnClick:!1,renderNode:W})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"data.ts",language:"tsx",code:o}]};function U(e,t){let a,{draggedNode:n,targetNode:r,position:o}=t;if(n===r||!(0,h.findTreeNode)(r,e)||(a=(0,h.findTreeNode)(n,e))&&a.children&&function e(t){for(let a of t)if(a.value===r||a.children&&e(a.children))return!0;return!1}(a.children))return e;let{data:l,removed:s}=function e(t,a){let n=null;return{data:t.reduce((t,r)=>{if(r.value===a)return n={...r},t;if(r.children){let o=e(r.children,a);o.removed?(n=o.removed,t.push({...r,children:o.data})):t.push(r)}else t.push(r);return t},[]),removed:n}}(e,n);return s?function e(t,a,n,r){if("inside"===r)return t.map(t=>t.value===n?{...t,children:[...t.children||[],a]}:t.children?{...t,children:e(t.children,a,n,r)}:t);let o=t.findIndex(e=>e.value===n);if(-1!==o){let e=[...t];return e.splice("before"===r?o:o+1,0,a),e}return t.map(t=>t.children?{...t,children:e(t.children,a,n,r)}:t)}(l,s,r,o):e}let Y=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"},{label:"contact.tsx",value:"pages/contact.tsx"}]},{label:"Components",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"},{label:"Sidebar.tsx",value:"components/Sidebar.tsx"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}];function J({node:e,expanded:t,hasChildren:a,elementProps:n}){return(0,f.jsxs)(w.Group,{gap:5,...n,children:[a&&(0,f.jsx)(L.CaretDownIcon,{size:18,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}}),(0,f.jsx)("span",{children:e.label})]})}let Q={type:"code",component:function(){let[e,t]=(0,v.useState)(Y);return(0,f.jsx)(C,{data:e,onDragDrop:e=>t(t=>U(t,e)),renderNode:e=>(0,f.jsx)(J,{...e})})},centered:!0,maxWidth:340,code:`
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
`},X=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"}]},{label:"Components (locked)",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"}]},{label:"package.json",value:"package.json"}];function ee({node:e,expanded:t,hasChildren:a,elementProps:n}){return(0,f.jsxs)(w.Group,{gap:5,...n,children:[a&&(0,f.jsx)(L.CaretDownIcon,{size:18,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}}),(0,f.jsx)("span",{children:e.label})]})}let et={type:"code",component:function(){let[e,t]=(0,v.useState)(X);return(0,f.jsx)(C,{data:e,allowDrop:({draggedNode:e,targetNode:t,position:a})=>!("components"===e||e.startsWith("components/"))&&("components"!==t||"inside"!==a)&&!t.startsWith("components/"),onDragDrop:e=>t(t=>U(t,e)),renderNode:e=>(0,f.jsx)(ee,{...e})})},centered:!0,maxWidth:340,code:`
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
`};var ea=e.i(414124);let en=[{label:"Pages",value:"pages",children:[{label:"index.tsx",value:"pages/index.tsx"},{label:"about.tsx",value:"pages/about.tsx"}]},{label:"Components",value:"components",children:[{label:"Header.tsx",value:"components/Header.tsx"},{label:"Footer.tsx",value:"components/Footer.tsx"}]},{label:"package.json",value:"package.json"}];function er({node:e,expanded:t,hasChildren:a,elementProps:n,dragHandleProps:r}){return(0,f.jsxs)(w.Group,{gap:4,...n,children:[(0,f.jsx)(ea.DotsSixVerticalIcon,{...r,size:16,style:{cursor:"grab"}}),a&&(0,f.jsx)(L.CaretDownIcon,{size:18,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}}),(0,f.jsx)("span",{children:e.label})]})}let eo={type:"code",component:function(){let[e,t]=(0,v.useState)(en);return(0,f.jsx)(C,{data:e,withDragHandle:!0,onDragDrop:e=>t(t=>U(t,e)),renderNode:e=>(0,f.jsx)(er,{...e})})},centered:!0,maxWidth:340,code:`
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
`};var el=e.i(171481);let es=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),v.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm39.25,56.75A6,6,0,0,0,177.5,87l22.62-22.63a6,6,0,0,0-8.48-8.48L169,78.5a6,6,0,0,0,4.24,10.25ZM224,122H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z"}))]]),ed=v.forwardRef((e,t)=>v.createElement(el.default,{ref:t,...e,weights:es}));ed.displayName="SpinnerIcon";let ec=[{label:"Documents",value:"documents",hasChildren:!0},{label:"Photos",value:"photos",hasChildren:!0},{label:"README.md",value:"readme"}];async function ei(e){return await new Promise(e=>{setTimeout(e,1e3)}),[{label:`${e}/file-1.txt`,value:`${e}/file-1.txt`},{label:`${e}/file-2.txt`,value:`${e}/file-2.txt`},{label:`${e}/subfolder`,value:`${e}/subfolder`,hasChildren:!0}]}function eu({node:e,expanded:t,hasChildren:a,elementProps:n,isLoading:r}){return(0,f.jsxs)(w.Group,{gap:5,wrap:"nowrap",...n,children:[r?(0,f.jsx)(ed,{size:18,style:{animation:"spin 1s linear infinite",flexShrink:0}}):a&&(0,f.jsx)(L.CaretDownIcon,{size:18,style:{transform:t?"rotate(180deg)":"rotate(0deg)",flexShrink:0}}),(0,f.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label})]})}let ep={type:"code",component:function(){let[e,t]=(0,v.useState)(ec);return(0,f.jsx)(C,{data:e,tree:(0,T.useTree)({onLoadChildren:async e=>{let a=await ei(e);t(t=>(function e(t,a,n){let r=!1,o=t.map(t=>{if(t.value===a){r=!0;let e={...t,children:n};return delete e.hasChildren,e}if(Array.isArray(t.children)){let o=e(t.children,a,n);if(o!==t.children)return r=!0,{...t,children:o}}return t});return r?o:t})(t,e,a))}}),renderNode:e=>(0,f.jsx)(eu,{...e})})},centered:!0,maxWidth:340,code:`
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
`};var em=e.i(754067),eh=e.i(841209),ev=e.i(401570);let eg=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],ef={type:"code",component:function(){let[e,t]=(0,v.useState)(""),a=(0,T.useTree)({initialExpandedState:(0,T.getTreeExpandedState)(eg,[])});return(0,f.jsxs)("div",{children:[(0,f.jsx)(eh.TextInput,{placeholder:"Search...",mb:"sm",value:e,onChange:e=>{var n;t(n=e.currentTarget.value),n.trim()?a.setExpandedState((0,T.getTreeExpandedState)(eg,function e(t,a){let n=[];for(let r of t){let t=r.children?e(r.children,a):[];((0,ev.defaultTreeNodeFilter)(a,r)||t.length>0)&&n.push(r.value,...t)}return n}(eg,n))):a.collapseAllNodes()}}),(0,f.jsx)(C,{data:eg,tree:a,renderNode:({node:t,elementProps:a})=>{let n="string"==typeof t.label?t.label:t.value;return(0,f.jsx)("div",{...a,children:(0,f.jsx)(em.Highlight,{highlight:e,component:"span",children:n})})}})]})},centered:!0,maxWidth:340,code:`
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
`},ex=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],eb={type:"code",component:function(){let[e,t]=(0,v.useState)(""),a=(0,T.useTree)(),n=(0,v.useMemo)(()=>(0,ev.filterTreeData)(ex,e),[e]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(eh.TextInput,{placeholder:"Search...",mb:"sm",value:e,onChange:e=>(e=>{if(t(e),e.trim()){let t=(0,ev.filterTreeData)(ex,e);a.setExpandedState((0,T.getTreeExpandedState)(t,"*"))}else a.collapseAllNodes()})(e.currentTarget.value)}),(0,f.jsx)(C,{data:n,tree:a})]})},centered:!0,maxWidth:340,code:`
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
`};var eT=e.i(280130);let ek=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"},{label:"Input.tsx",value:"src/components/Input.tsx"}]},{label:"hooks",value:"src/hooks",children:[{label:"use-debounce.ts",value:"src/hooks/use-debounce.ts"},{label:"use-media-query.ts",value:"src/hooks/use-media-query.ts"}]}]},{label:"public",value:"public",children:[{label:"favicon.ico",value:"public/favicon.ico"},{label:"logo.svg",value:"public/logo.svg"}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],eD={type:"code",component:function(){let[e,t]=(0,v.useState)(""),a=(0,T.useTree)(),n=(0,v.useMemo)(()=>{let e;return e=new eT.default(function e(t){return t.reduce((t,a)=>(t.push(a),a.children&&t.push(...e(a.children)),t),[])}(ek),{keys:["label"],threshold:.3}),(t,a)=>e.search(t).some(e=>e.item.value===a.value)},[]),r=(0,v.useMemo)(()=>(0,ev.filterTreeData)(ek,e,n),[e,n]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(eh.TextInput,{placeholder:"Fuzzy search...",mb:"sm",value:e,onChange:e=>(e=>{if(t(e),e.trim()){let t=(0,ev.filterTreeData)(ek,e,n);a.setExpandedState((0,T.getTreeExpandedState)(t,"*"))}else a.collapseAllNodes()})(e.currentTarget.value)}),(0,f.jsx)(C,{data:r,tree:a})]})},centered:!0,maxWidth:340,code:`
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
`},eN={type:"code",component:function(){return(0,f.jsx)(C,{data:r,tree:(0,T.useTree)({initialExpandedState:(0,T.getTreeExpandedState)(r,"*")}),withLines:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
  });

  return <Tree data={data} tree={tree} withLines />;
}
`},{fileName:"data.ts",language:"tsx",code:o}]},ey=(0,v.memo)(function({node:e,level:t,parent:a,hasChildren:n,expanded:r,tree:o,expandOnClick:l=!0,selectOnClick:s,expandOnSpace:d=!0,checkOnSpace:c,renderNode:i,style:u,tabIndex:m=-1}){let h=(0,v.useRef)(null),g=o.isNodeLoading(e.value),x=o.getNodeLoadError(e.value),b=o.selectedState.includes(e.value),T={className:k.label,style:{},onClick:t=>{t.stopPropagation(),l&&n&&o.toggleExpanded(e.value),s&&o.select(e.value),h.current?.focus()},"data-selected":b||void 0,"data-value":e.value};return(0,f.jsx)("div",{ref:h,className:k.node,style:{"--label-offset":`calc(var(--level-offset, var(--mantine-spacing-lg)) * ${t-1})`,...u},role:"treeitem","aria-selected":b,"aria-expanded":n?r:void 0,"data-value":e.value,"data-selected":b||void 0,"data-level":t,tabIndex:m,onKeyDown:t=>{if("ArrowRight"===t.nativeEvent.code)if(t.stopPropagation(),t.preventDefault(),r&&n){let e=(0,p.findElementAncestor)(t.currentTarget,"[data-tree-root]"),a=e?Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display):[],n=a.indexOf(t.currentTarget);-1!==n&&a[n+1]?.focus()}else n&&o.expand(e.value);if("ArrowLeft"===t.nativeEvent.code&&(t.stopPropagation(),t.preventDefault(),r&&n?o.collapse(e.value):a&&(0,p.findElementAncestor)(t.currentTarget,"[data-tree-root]")?.querySelector(`[role=treeitem][data-value="${CSS.escape(a)}"]`)?.focus()),"ArrowDown"===t.nativeEvent.code||"ArrowUp"===t.nativeEvent.code){let e=(0,p.findElementAncestor)(t.currentTarget,"[data-tree-root]");if(!e)return;t.stopPropagation(),t.preventDefault();let a=Array.from(e.querySelectorAll("[role=treeitem]")).filter(e=>"none"!==e.style.display),n=a.indexOf(t.currentTarget);if(-1===n)return;a["ArrowDown"===t.nativeEvent.code?n+1:n-1]?.focus()}"Space"===t.nativeEvent.code&&(d&&(t.stopPropagation(),t.preventDefault(),o.toggleExpanded(e.value)),c&&(t.stopPropagation(),t.preventDefault(),o.isNodeChecked(e.value)?o.uncheckNode(e.value):o.checkNode(e.value)))},children:"function"==typeof i?i({node:e,level:t,selected:b,tree:o,expanded:r,hasChildren:n,isLoading:g,loadError:x,elementProps:T,dragHandleProps:void 0}):(0,f.jsx)("div",{...T,children:e.label})})});ey.displayName="@mantine/core/FlatTreeNode";var ej=e.i(463044);let eC=`
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
`,eS=(a=0,!function e(t,n,r){let o=0===n?20:Math.floor(8*Math.random())+2;for(let l=0;l<o&&r.count>0;l++){a++,r.count--;let o=n<3&&r.count>0&&Math.random()>.3,l={label:`${o?"Folder":"File"} ${a}`,value:`node-${a}`,children:o?[]:void 0};o&&e(l.children,n+1,r),t.push(l)}}(t=[],0,{count:2e3}),t),eA=(0,T.getTreeExpandedState)(eS,"*"),eE={type:"code",component:function(){let e=(0,T.useTree)({initialExpandedState:eA}),t=(0,v.useMemo)(()=>{var t;let a;return t=e.expandedState,!function e(t,a,n,r,o){for(let l=0;l<a.length;l++){let s=a[l],d=Array.isArray(s.children),c=!!s.hasChildren&&!d,i=d||c,u=n[s.value]||!1;t.push({node:s,level:o,parent:r,hasChildren:i,expanded:u}),u&&d&&e(t,s.children,n,s.value,o+1)}}(a=[],eS,t,null,1),a},[e.expandedState]),a=(0,v.useRef)(null),n=(0,ej.useVirtualizer)({count:t.length,getScrollElement:()=>a.current,estimateSize:()=>30,overscan:20});return(0,f.jsx)("div",{ref:a,style:{height:400,overflow:"auto"},children:(0,f.jsx)("div",{"data-tree-root":!0,role:"tree",style:{height:n.getTotalSize(),position:"relative"},children:n.getVirtualItems().map(a=>(0,f.jsx)(ey,{...t[a.index],tree:e,expandOnClick:!0,selectOnClick:!0,tabIndex:0===a.index?0:-1,style:{position:"absolute",top:0,left:0,width:"100%",height:a.size,transform:`translateY(${a.start}px)`}},t[a.index].node.value))})})},code:eC,defaultExpanded:!1},eI=({node:e,expanded:t,hasChildren:a,elementProps:n,tree:r})=>{let o=r.isNodeChecked(e.value);return(0,f.jsxs)(w.Group,{gap:"xs",...n,children:[(0,f.jsx)(B.Checkbox.Indicator,{checked:o,onClick:()=>o?r.uncheckNode(e.value):r.checkNode(e.value)}),(0,f.jsxs)(w.Group,{gap:5,onClick:()=>r.toggleExpanded(e.value),children:[(0,f.jsx)("span",{children:e.label}),a&&(0,f.jsx)(L.CaretDownIcon,{size:14,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}})]})]})},ew={type:"code",component:function(){return(0,f.jsx)(C,{data:r,tree:(0,T.useTree)({checkStrictly:!0}),levelOffset:23,expandOnClick:!1,renderNode:eI})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"data.ts",language:"tsx",code:o}]};var eP=(0,n.__exportAll)({asyncLoading:()=>ep,checkAllNodes:()=>K,checkStrictly:()=>ew,checked:()=>$,controller:()=>V,dragDrop:()=>Q,dragDropAllow:()=>et,dragDropHandle:()=>eo,expandedState:()=>q,files:()=>H,lines:()=>eN,renderNode:()=>_,searchFilter:()=>eb,searchFuzzy:()=>eD,searchHighlight:()=>ef,usage:()=>S,virtualized:()=>eE});e.s(["TreeDemos",0,eP],83967)}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43300],{47333:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tree",function(){return t(38063)}])},38063:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var a=t(52322),o=t(45392),d=t(15601),r=t(76947);let l={type:"code",component:function(){return(0,a.jsx)(d.m,{data:r.a})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
`},{fileName:"data.ts",language:"tsx",code:r.o}]};var s=t(92536),c=t(93010);let i={type:"code",component:function(){return(0,a.jsx)(d.m,{data:r.a,levelOffset:23,renderNode:({node:e,expanded:n,hasChildren:t,elementProps:o})=>(0,a.jsxs)(c.Z,{gap:5,...o,children:[t&&(0,a.jsx)(s.Z,{size:18,style:{transform:n?"rotate(180deg)":"rotate(0deg)"}}),(0,a.jsx)("span",{children:e.label})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { IconChevronDown } from '@tabler/icons-react';
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
            <IconChevronDown
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
`},{fileName:"data.ts",language:"tsx",code:r.o}]};var h=t(98781),p=t(17115);let u={type:"code",component:function(){let e=(0,h.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.m,{data:r.a,tree:e}),(0,a.jsxs)(c.Z,{mt:"md",children:[(0,a.jsx)(p.z,{onClick:()=>e.expandAllNodes(),children:"Expand all"}),(0,a.jsx)(p.z,{onClick:()=>e.collapseAllNodes(),children:"Collapse all"})]})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`},{fileName:"data.ts",language:"tsx",code:r.o}]};var m=t(70664),x=t(95047);let f=({node:e,expanded:n,hasChildren:t,elementProps:o,tree:d})=>{let r=d.isNodeChecked(e.value),l=d.isNodeIndeterminate(e.value);return(0,a.jsxs)(c.Z,{gap:"xs",...o,children:[(0,a.jsx)(x.X.Indicator,{checked:r,indeterminate:l,onClick:()=>r?d.uncheckNode(e.value):d.checkNode(e.value)}),(0,a.jsxs)(c.Z,{gap:5,onClick:()=>d.toggleExpanded(e.value),children:[(0,a.jsx)("span",{children:e.label}),t&&(0,a.jsx)(s.Z,{size:14,style:{transform:n?"rotate(180deg)":"rotate(0deg)"}})]})]})},g={type:"code",component:function(){let e=(0,h.Z)({initialExpandedState:(0,h.I)(r.a,"*"),initialCheckedState:["node_modules","node_modules/@mantine/core/index.d.ts","node_modules/@mantine/form/package.json"]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Z,{mb:"md",children:[(0,a.jsx)(p.z,{onClick:()=>e.checkAllNodes(),children:"Check all"}),(0,a.jsx)(p.z,{onClick:()=>e.uncheckAllNodes(),children:"Uncheck all"})]}),(0,a.jsx)(d.m,{tree:e,data:r.a,levelOffset:23,expandOnClick:!1,renderNode:f})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { IconChevronDown } from '@tabler/icons-react';
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
          <IconChevronDown
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
        <Button onClick={() => tree.checkAllNodes()}>Check all</Button>
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
`},{fileName:"data.ts",language:"tsx",code:r.o}]},v={type:"code",component:function(){let e=(0,h.Z)({initialExpandedState:(0,h.I)(r.a,["src","src/components"])});return(0,a.jsx)(d.m,{data:r.a,tree:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, ['src', 'src/components']),
  });

  return <Tree data={data} tree={tree} />;
}
`},{fileName:"data.ts",language:"tsx",code:r.o}]};var j=t(29466),k=t(25071),N=t(15019);let b=(0,k.A)(N.us.Tree);function C(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Tree"})," component is used to display hierarchical data. ",(0,a.jsx)(n.code,{children:"Tree"})," component\nhas minimal styling by default, you can customize styles with ",(0,a.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(t,{data:l}),"\n",(0,a.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,a.jsxs)(n.p,{children:["Data passed to the ",(0,a.jsx)(n.code,{children:"data"})," prop should follow these rules:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data must be an array"}),"\n",(0,a.jsx)(n.li,{children:"Each item in the array represents a node in the tree"}),"\n",(0,a.jsxs)(n.li,{children:["Each node must be an object with ",(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"label"})," keys"]}),"\n",(0,a.jsxs)(n.li,{children:["Each node can have ",(0,a.jsx)(n.code,{children:"children"})," key with an array of child nodes"]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"value"})," of each node must be unique"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Valid data example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"// ✅ Valid data, all values are unique\nconst data = [\n  {\n    value: 'src',\n    label: 'src',\n    children: [\n      { value: 'src/components', label: 'components' },\n      { value: 'src/hooks', label: 'hooks' },\n    ],\n  },\n  { value: 'package.json', label: 'package.json' },\n];\n"})}),"\n",(0,a.jsx)(n.p,{children:"Invalid data example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"// ❌ Invalid data, values are not unique (components is used twice)\nconst data = [\n  {\n    value: 'src',\n    label: 'src',\n    children: [{ value: 'components', label: 'components' }],\n  },\n  { value: 'components', label: 'components' },\n];\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-type",children:"Data type"}),"\n",(0,a.jsxs)(n.p,{children:["You can import ",(0,a.jsx)(n.code,{children:"TreeNodeData"})," type to define data type for your tree:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { TreeNodeData } from '@mantine/core';\n\nconst data: TreeNodeData[] = [\n  {\n    value: 'src',\n    label: 'src',\n    children: [\n      { value: 'src/components', label: 'components' },\n      { value: 'src/hooks', label: 'hooks' },\n    ],\n  },\n  { value: 'package.json', label: 'package.json' },\n];\n"})}),"\n",(0,a.jsx)(n.h2,{id:"rendernode",children:"renderNode"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"renderNode"})," prop to customize node rendering.\n",(0,a.jsx)(n.code,{children:"renderNode"})," function receives an object with the following properties as a single argument:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"export interface RenderTreeNodePayload {\n  /** Node level in the tree */\n  level: number;\n\n  /** `true` if the node is expanded, applicable only for nodes with `children` */\n  expanded: boolean;\n\n  /** `true` if the node has non-empty `children` array */\n  hasChildren: boolean;\n\n  /** `true` if the node is selected */\n  selected: boolean;\n\n  /** Node data from the `data` prop of `Tree` */\n  node: TreeNodeData;\n\n  /** Tree controller instance, return value of `useTree` hook */\n  tree: TreeController;\n\n  /** Props to spread into the root node element */\n  elementProps: {\n    className: string;\n    style: React.CSSProperties;\n    onClick: (event: React.MouseEvent) => void;\n    'data-selected': boolean | undefined;\n    'data-value': string;\n    'data-hovered': boolean | undefined;\n  };\n}\n"})}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"usetree-hook",children:"useTree hook"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useTree"})," hook can be used to control selected and expanded state of the tree."]}),"\n",(0,a.jsx)(n.p,{children:"The hook accepts an object with the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"export interface UseTreeInput {\n  /** Initial expanded state of all nodes */\n  initialExpandedState?: Record<string, boolean>;\n\n  /** Initial selected state of nodes */\n  initialSelectedState?: string[];\n\n  /** Initial checked state of nodes */\n  initialCheckedState?: string[];\n\n  /** Determines whether multiple node can be selected at a time */\n  multiple?: boolean;\n\n  /** Called with the node value when it is expanded */\n  onNodeExpand?: (value: string) => void;\n\n  /** Called with the node value when it is collapsed */\n  onNodeCollapse?: (value: string) => void;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"And returns an object with the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"export interface UseTreeReturnType {\n  /** Determines whether multiple node can be selected at a time */\n  multiple: boolean;\n\n  /** A record of `node.value` and boolean values that represent nodes expanded state */\n  expandedState: TreeExpandedState;\n\n  /** An array of selected nodes values */\n  selectedState: string[];\n\n  /** An array of checked nodes values */\n  checkedState: string[];\n\n  /** A value of the node that was last clicked\n   * Anchor node is used to determine range of selected nodes for multiple selection\n   */\n  anchorNode: string | null;\n\n  /** Initializes tree state based on provided data, called automatically by the Tree component */\n  initialize: (data: TreeNodeData[]) => void;\n\n  /** Toggles expanded state of the node with provided value */\n  toggleExpanded: (value: string) => void;\n\n  /** Collapses node with provided value */\n  collapse: (value: string) => void;\n\n  /** Expands node with provided value */\n  expand: (value: string) => void;\n\n  /** Expands all nodes */\n  expandAllNodes: () => void;\n\n  /** Collapses all nodes */\n  collapseAllNodes: () => void;\n\n  /** Sets expanded state */\n  setExpandedState: React.Dispatch<\n    React.SetStateAction<TreeExpandedState>\n  >;\n\n  /** Toggles selected state of the node with provided value */\n  toggleSelected: (value: string) => void;\n\n  /** Selects node with provided value */\n  select: (value: string) => void;\n\n  /** Deselects node with provided value */\n  deselect: (value: string) => void;\n\n  /** Clears selected state */\n  clearSelected: () => void;\n\n  /** Sets selected state */\n  setSelectedState: React.Dispatch<React.SetStateAction<string[]>>;\n\n  /** A value of the node that is currently hovered */\n  hoveredNode: string | null;\n\n  /** Sets hovered node */\n  setHoveredNode: React.Dispatch<React.SetStateAction<string | null>>;\n\n  /** Checks node with provided value */\n  checkNode: (value: string) => void;\n\n  /** Unchecks node with provided value */\n  uncheckNode: (value: string) => void;\n\n  /** Checks all nodes */\n  checkAllNodes: () => void;\n\n  /** Unchecks all nodes */\n  uncheckAllNodes: () => void;\n\n  /** Sets checked state */\n  setCheckedState: React.Dispatch<React.SetStateAction<string[]>>;\n\n  /** Returns all checked nodes with status */\n  getCheckedNodes: () => CheckedNodeStatus[];\n\n  /** Returns `true` if node with provided value is checked */\n  isNodeChecked: (value: string) => boolean;\n\n  /** Returns `true` if node with provided value is indeterminate */\n  isNodeIndeterminate: (value: string) => boolean;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can pass the value returned by the ",(0,a.jsx)(n.code,{children:"useTree"})," hook to the ",(0,a.jsx)(n.code,{children:"tree"})," prop of the ",(0,a.jsx)(n.code,{children:"Tree"})," component\nto control tree state:"]}),"\n",(0,a.jsx)(t,{data:u}),"\n",(0,a.jsx)(n.h2,{id:"checked-state",children:"Checked state"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Tree"})," can be used to display checked state with checkboxes.\nTo implement checked state, you need to render ",(0,a.jsx)(n.code,{children:"Checkbox.Indicator"})," in the ",(0,a.jsx)(n.code,{children:"renderNode"})," function:"]}),"\n",(0,a.jsx)(t,{data:m.e}),"\n",(0,a.jsxs)(n.p,{children:["To check/uncheck nodes, use ",(0,a.jsx)(n.code,{children:"checkAllNodes"})," and ",(0,a.jsx)(n.code,{children:"uncheckAllNodes"})," functions:"]}),"\n",(0,a.jsx)(t,{data:g}),"\n",(0,a.jsx)(n.h2,{id:"initial-expanded-state",children:"Initial expanded state"}),"\n",(0,a.jsxs)(n.p,{children:["Expanded state is an object of ",(0,a.jsx)(n.code,{children:"node.value"})," and boolean values that represent nodes expanded state.\nTo change initial expanded state, pass ",(0,a.jsx)(n.code,{children:"initialExpandedState"})," to the ",(0,a.jsx)(n.code,{children:"useTree"})," hook.\nTo generate expanded state from data with expanded nodes, you can use ",(0,a.jsx)(n.code,{children:"getTreeExpandedState"})," function:\nit accepts data and an array of expanded nodes values and returns expanded state object."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"'*'"})," is passed as the second argument to ",(0,a.jsx)(n.code,{children:"getTreeExpandedState"}),", all nodes will be expanded:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { getTreeExpandedState } from '@mantine/core';\n\n// Expand two given nodes\ngetTreeExpandedState(data, ['src', 'src/components']);\n\n// Expand all nodes\ngetTreeExpandedState(data, '*');\n"})}),"\n",(0,a.jsx)(t,{data:v}),"\n",(0,a.jsx)(n.h2,{id:"example-files-tree",children:"Example: files tree"}),"\n",(0,a.jsx)(t,{data:j.Q})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(b,{...e,children:(0,a.jsx)(C,{...e})})}},70664:function(e,n,t){"use strict";t.d(n,{e:function(){return i}});var a=t(52322),o=t(92536),d=t(93010),r=t(95047),l=t(15601),s=t(76947);let c=({node:e,expanded:n,hasChildren:t,elementProps:l,tree:s})=>{let c=s.isNodeChecked(e.value),i=s.isNodeIndeterminate(e.value);return(0,a.jsxs)(d.Z,{gap:"xs",...l,children:[(0,a.jsx)(r.X.Indicator,{checked:c,indeterminate:i,onClick:()=>c?s.uncheckNode(e.value):s.checkNode(e.value)}),(0,a.jsxs)(d.Z,{gap:5,onClick:()=>s.toggleExpanded(e.value),children:[(0,a.jsx)("span",{children:e.label}),t&&(0,a.jsx)(o.Z,{size:14,style:{transform:n?"rotate(180deg)":"rotate(0deg)"}})]})]})},i={type:"code",component:function(){return(0,a.jsx)(l.m,{data:s.a,levelOffset:23,expandOnClick:!1,renderNode:c})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { IconChevronDown } from '@tabler/icons-react';
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
          <IconChevronDown
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
`},{fileName:"data.ts",language:"tsx",code:s.o}]}},29466:function(e,n,t){"use strict";t.d(n,{Q:function(){return f}});var a=t(52322),o=t(73681),d=(0,o.Z)("outline","folder-open","IconFolderOpen",[["path",{d:"M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2",key:"svg-0"}]]),r=(0,o.Z)("outline","folder","IconFolder",[["path",{d:"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",key:"svg-0"}]]),l=t(93010),s=t(15601),c=t(82106),i=t(55709),h=t(60934),p=t(76947),u={root:"m_78f70933",label:"m_a58f00c3"};function m({name:e,isFolder:n,expanded:t}){return e.endsWith("package.json")?(0,a.jsx)(c._,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,a.jsx)(i.s,{size:14}):e.endsWith(".css")?(0,a.jsx)(h.L,{size:14}):n?t?(0,a.jsx)(d,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):(0,a.jsx)(r,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):null}function x({node:e,expanded:n,hasChildren:t,elementProps:o}){return(0,a.jsxs)(l.Z,{gap:5,...o,children:[(0,a.jsx)(m,{name:e.value,isFolder:t,expanded:n}),(0,a.jsx)("span",{children:e.label})]})}let f={type:"code",component:function(){return(0,a.jsx)(s.m,{classNames:u,selectOnClick:!0,clearSelectionOnOutsideClick:!0,data:p.a,renderNode:e=>(0,a.jsx)(x,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { IconFolder, IconFolderOpen } from '@tabler/icons-react';
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
      <IconFolderOpen color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    ) : (
      <IconFolder color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
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

.label {
  padding-block: 3px;

  &[data-hovered] {
    @mixin where-light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin where-dark {
      background-color: var(--mantine-color-dark-6);
      color: var(--mantine-color-white);
    }
  }

  &[data-selected] {
    font-weight: 700;

    @mixin light {
      background-color: var(--mantine-color-blue-0);
      color: var(--mantine-color-black);
    }

    @mixin dark {
      background-color: alpha(var(--mantine-color-blue-8), 0.35);
      color: var(--mantine-color-blue-0);
    }
  }
}`},{fileName:"data.ts",language:"tsx",code:p.o}]}}},function(e){e.O(0,[61177,66748,11340,59133,92888,49774,40179],function(){return e(e.s=47333)}),_N_E=e.O()}]);
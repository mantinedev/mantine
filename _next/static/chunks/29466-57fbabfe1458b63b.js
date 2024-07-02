"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29466],{29466:function(e,a,n){n.d(a,{Q:function(){return h}});var l=n(52322),o=n(73681),t=(0,o.Z)("outline","folder-open","IconFolderOpen",[["path",{d:"M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2",key:"svg-0"}]]),r=(0,o.Z)("outline","folder","IconFolder",[["path",{d:"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",key:"svg-0"}]]),d=n(93010),s=n(15601),c=n(82106),i=n(55709),u=n(60934),m=n(76947),v={root:"m_78f70933",label:"m_a58f00c3"};function p({name:e,isFolder:a,expanded:n}){return e.endsWith("package.json")?(0,l.jsx)(c._,{size:14}):e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith("tsconfig.json")?(0,l.jsx)(i.s,{size:14}):e.endsWith(".css")?(0,l.jsx)(u.L,{size:14}):a?n?(0,l.jsx)(t,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):(0,l.jsx)(r,{color:"var(--mantine-color-yellow-9)",size:14,stroke:2.5}):null}function f({node:e,expanded:a,hasChildren:n,elementProps:o}){return(0,l.jsxs)(d.Z,{gap:5,...o,children:[(0,l.jsx)(p,{name:e.value,isFolder:n,expanded:a}),(0,l.jsx)("span",{children:e.label})]})}let h={type:"code",component:function(){return(0,l.jsx)(s.m,{classNames:v,selectOnClick:!0,clearSelectionOnOutsideClick:!0,data:m.a,renderNode:e=>(0,l.jsx)(f,{...e})})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`},{fileName:"data.ts",language:"tsx",code:m.o}]}},76947:function(e,a,n){n.d(a,{a:function(){return l},o:function(){return o}});let l=[{label:"src",value:"src",children:[{label:"components",value:"src/components",children:[{label:"Accordion.tsx",value:"src/components/Accordion.tsx"},{label:"Tree.tsx",value:"src/components/Tree.tsx"},{label:"Button.tsx",value:"src/components/Button.tsx"}]}]},{label:"node_modules",value:"node_modules",children:[{label:"react",value:"node_modules/react",children:[{label:"index.d.ts",value:"node_modules/react/index.d.ts"},{label:"package.json",value:"node_modules/react/package.json"}]},{label:"@mantine",value:"node_modules/@mantine",children:[{label:"core",value:"node_modules/@mantine/core",children:[{label:"index.d.ts",value:"node_modules/@mantine/core/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/core/package.json"}]},{label:"hooks",value:"node_modules/@mantine/hooks",children:[{label:"index.d.ts",value:"node_modules/@mantine/hooks/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/hooks/package.json"}]},{label:"form",value:"node_modules/@mantine/form",children:[{label:"index.d.ts",value:"node_modules/@mantine/form/index.d.ts"},{label:"package.json",value:"node_modules/@mantine/form/package.json"}]}]}]},{label:"package.json",value:"package.json"},{label:"tsconfig.json",value:"tsconfig.json"}],o=`import { TreeNodeData } from '@mantine/core';

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
];`},15601:function(e,a,n){n.d(a,{m:function(){return k}});var l=n(52322),o=n(2784),t=n(33303),r=n(70837),d=n(91482),s=n(11200),c=n(38483),i=n(46690),u=n(28559),m=n(82027),v=n(73491);function p(e,a,n){if(!e||!a)return[];let l=n.indexOf(e),o=n.indexOf(a);return n.slice(Math.min(l,o),Math.max(l,o)+1)}function f({node:e,getStyles:a,rootIndex:n,controller:t,expandOnClick:r,selectOnClick:d,isSubtree:s,level:c=1,renderNode:i,flatValues:u,allowRangeSelection:m,expandOnSpace:h}){let b=(0,o.useRef)(null),x=(e.children||[]).map(e=>(0,l.jsx)(f,{node:e,flatValues:u,getStyles:a,rootIndex:void 0,level:c+1,controller:t,expandOnClick:r,isSubtree:!0,renderNode:i,selectOnClick:d,allowRangeSelection:m,expandOnSpace:h},e.value)),g=t.selectedState.includes(e.value),k={...a("label"),onClick:a=>{a.stopPropagation(),m&&a.shiftKey&&t.anchorNode?t.setSelectedState(p(t.anchorNode,e.value,u)):(r&&t.toggleExpanded(e.value),d&&t.select(e.value)),b.current?.focus()},"data-selected":g||void 0,"data-value":e.value,"data-hovered":t.hoveredNode===e.value||void 0};return(0,l.jsxs)("li",{...a("node",{style:{"--label-offset":`calc(var(--level-offset) * ${c-1})`}}),role:"treeitem","aria-selected":g,"data-value":e.value,"data-selected":g||void 0,"data-hovered":t.hoveredNode===e.value||void 0,"data-level":c,tabIndex:0===n?0:-1,onKeyDown:a=>{if("ArrowRight"===a.nativeEvent.code&&(a.stopPropagation(),a.preventDefault(),t.expandedState[e.value]?a.currentTarget.querySelector("[role=treeitem]")?.focus():t.expand(e.value)),"ArrowLeft"===a.nativeEvent.code&&(a.stopPropagation(),a.preventDefault(),t.expandedState[e.value]&&(e.children||[]).length>0?t.collapse(e.value):s&&v.p(a.currentTarget,"[role=treeitem]")?.focus()),"ArrowDown"===a.nativeEvent.code||"ArrowUp"===a.nativeEvent.code){let e=(0,v.p)(a.currentTarget,"[data-tree-root]");if(!e)return;a.stopPropagation(),a.preventDefault();let n=Array.from(e.querySelectorAll("[role=treeitem]")),l=n.indexOf(a.currentTarget);if(-1===l)return;let o="ArrowDown"===a.nativeEvent.code?l+1:l-1;if(n[o]?.focus(),a.shiftKey){let e=n[o];e&&t.setSelectedState(p(t.anchorNode,e.dataset.value,u))}}"Space"===a.nativeEvent.code&&h&&(a.stopPropagation(),a.preventDefault(),t.toggleExpanded(e.value))},ref:b,onMouseOver:a=>{a.stopPropagation(),t.setHoveredNode(e.value)},onMouseLeave:e=>{e.stopPropagation(),t.setHoveredNode(null)},children:["function"==typeof i?i({node:e,level:c,selected:g,expanded:t.expandedState[e.value]||!1,hasChildren:Array.isArray(e.children)&&e.children.length>0,elementProps:k}):(0,l.jsx)("div",{...k,children:e.label}),t.expandedState[e.value]&&x.length>0&&(0,l.jsx)("ul",{role:"group",...a("subtree"),"data-level":c,children:x})]})}f.displayName="@mantine/core/TreeNode";var h=n(30911),b={root:"m_f698e191",subtree:"m_75f3ecf",node:"m_f6970eb1",label:"m_dc283425"};let x={expandOnClick:!0,allowRangeSelection:!0,expandOnSpace:!0},g=(0,s.Z)((e,{levelOffset:a})=>({root:{"--level-offset":(0,d.bG)(a)}})),k=(0,m.d)((e,a)=>{let n=(0,c.w)("Tree",x,e),{classNames:d,className:s,style:m,styles:v,unstyled:p,vars:k,data:j,expandOnClick:_,tree:y,renderNode:C,selectOnClick:N,clearSelectionOnOutsideClick:S,allowRangeSelection:w,expandOnSpace:T,levelOffset:I,...O}=n,A=(0,h.Z)(),F=y||A,E=(0,i.y)({name:"Tree",classes:b,props:n,className:s,style:m,classNames:d,styles:v,unstyled:p,vars:k,varsResolver:g}),D=(0,t.O)(()=>S&&F.clearSelected()),P=(0,r.Yx)(a,D),z=(0,o.useMemo)(()=>(function e(a){return a.reduce((a,n)=>(a.push(n.value),n.children&&a.push(...e(n.children)),a),[])})(j),[j]);(0,o.useEffect)(()=>{F.initialize(j)},[j]);let W=j.map((e,a)=>(0,l.jsx)(f,{node:e,getStyles:E,rootIndex:a,expandOnClick:_,selectOnClick:N,controller:F,renderNode:C,flatValues:z,allowRangeSelection:w,expandOnSpace:T},e.value));return(0,l.jsx)(u.x,{component:"ul",ref:P,...E("root"),...O,role:"tree","aria-multiselectable":F.multiple,"data-tree-root":!0,children:W})});k.displayName="@mantine/core/Tree",k.classes=b},30911:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(2784);function o({initialSelectedState:e=[],initialExpandedState:a={},multiple:n=!1}={}){let[o,t]=(0,l.useState)(a),[r,d]=(0,l.useState)(e),[s,c]=(0,l.useState)(null),[i,u]=(0,l.useState)(null),m=(0,l.useCallback)(e=>{t(a=>(function e(a,n,l,o={}){return n.forEach(n=>{o[n.value]=n.value in a?a[n.value]:n.value===l,Array.isArray(n.children)&&e(a,n.children,l,o)}),o})(a,e,r))},[r]),v=(0,l.useCallback)(e=>{t(a=>({...a,[e]:!a[e]}))},[]),p=(0,l.useCallback)(e=>{t(a=>({...a,[e]:!1}))},[]),f=(0,l.useCallback)(e=>{t(a=>({...a,[e]:!0}))},[]),h=(0,l.useCallback)(()=>{t(e=>{let a={...e};return Object.keys(a).forEach(e=>{a[e]=!0}),a})},[]),b=(0,l.useCallback)(()=>{t(e=>{let a={...e};return Object.keys(a).forEach(e=>{a[e]=!1}),a})},[]),x=(0,l.useCallback)(e=>d(a=>n?a.includes(e)?(c(null),a.filter(a=>a!==e)):(c(e),[...a,e]):a.includes(e)?(c(null),[]):(c(e),[e])),[]),g=(0,l.useCallback)(e=>{c(e),d(a=>n?a.includes(e)?a:[...a,e]:[e])},[]),k=(0,l.useCallback)(e=>{s===e&&c(null),d(a=>a.filter(a=>a!==e))},[]);return{multiple:n,expandedState:o,selectedState:r,anchorNode:s,initialize:m,toggleExpanded:v,collapse:p,expand:f,expandAllNodes:h,collapseAllNodes:b,setExpandedState:t,toggleSelected:x,select:g,deselect:k,clearSelected:(0,l.useCallback)(()=>{d([]),c(null)},[]),setSelectedState:d,hoveredNode:i,setHoveredNode:u}}}}]);
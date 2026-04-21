# Tree
Package: @mantine/core
Import: import { Tree } from '@mantine/core';
Description: Display a Tree structure

## Usage

The `Tree` component is used to display hierarchical data. The `Tree` component
has minimal styling by default; you can customize styles with [Styles API](https://mantine.dev/llms/styles-styles-api.md).

```tsx
import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
```


## Data prop

Data passed to the `data` prop should follow these rules:

* Data must be a stable reference (memoized)
* Data must be an array
* Each item in the array represents a node in the tree
* Each node must be an object with `value` and `label` keys
* Each node can have a `children` key with an array of child nodes
* The `value` of each node must be unique

Valid data example:

```tsx
// ✅ Valid data, all values are unique
const data = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
```

Invalid data example:

```tsx
// ❌ Invalid data, values are not unique (components is used twice)
const data = [
  {
    value: 'src',
    label: 'src',
    children: [{ value: 'components', label: 'components' }],
  },
  { value: 'components', label: 'components' },
];
```

## Data type

You can import the `TreeNodeData` type to define the data type for your tree:

```tsx
import { TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
```

## renderNode

Use the `renderNode` prop to customize node rendering.
The `renderNode` function receives an object with the following properties as a single argument:

```tsx
export interface RenderTreeNodePayload {
  /** Node level in the tree */
  level: number;

  /** `true` if the node is expanded, applicable only for nodes with `children` */
  expanded: boolean;

  /** `true` if the node has non-empty `children` array or `hasChildren` is set to `true` */
  hasChildren: boolean;

  /** `true` if the node is selected */
  selected: boolean;

  /** `true` if the node's children are currently being loaded */
  isLoading: boolean;

  /** Error from the last failed load attempt, or `null` */
  loadError: Error | null;

  /** Node data from the `data` prop of `Tree` */
  node: TreeNodeData;

  /** Tree controller instance, return value of `useTree` hook */
  tree: TreeController;

  /** Props to spread into the root node element */
  elementProps: {
    className: string;
    style: React.CSSProperties;
    onClick: (event: React.MouseEvent) => void;
    'data-selected': boolean | undefined;
    'data-value': string;
  };
}
```

```tsx
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
```


## useTree hook

`useTree` hook can be used to control selected and expanded state of the tree.

The hook accepts an object with the following properties:

```tsx
export interface UseTreeInput {
  /** Initial expanded state of all nodes, uncontrolled state */
  initialExpandedState?: TreeExpandedState;

  /** Expanded state of all nodes, controlled state */
  expandedState?: TreeExpandedState;

  /** Called when the tree expanded state changes */
  onExpandedStateChange?: (expandedState: TreeExpandedState) => void;

  /** Initial selected state of nodes */
  initialSelectedState?: string[];

  /** Selected state of all nodes, controlled state */
  selectedState?: string[];

  /** Called when the tree selected state changes */
  onSelectedStateChange?: (selectedState: string[]) => void;

  /** Initial checked state of nodes */
  initialCheckedState?: string[];

  /** Checked state of all nodes, controlled state */
  checkedState?: string[];

  /** Called when the tree checked state changes */
  onCheckedStateChange?: (checkedState: string[]) => void;

  /** Determines whether multiple node can be selected at a time */
  multiple?: boolean;

  /** Called with the node value when it is expanded */
  onNodeExpand?: (value: string) => void;

  /** Called with the node value when it is collapsed */
  onNodeCollapse?: (value: string) => void;

  /** Called when a node with `hasChildren: true` is expanded for the first time */
  onLoadChildren?: (nodeValue: string) => Promise<void>;

  /** When `true`, checking a parent does not affect children and vice versa.
   * Each node's checked state is fully independent. @default false
   */
  checkStrictly?: boolean;
}
```

And returns an object with the following properties:

```tsx
export interface UseTreeReturnType {
  /** When `true`, each node's checked state is independent (no parent-child cascading) */
  checkStrictly: boolean;

  /** Determines whether multiple node can be selected at a time */
  multiple: boolean;

  /** A record of `node.value` and boolean values that represent nodes expanded state */
  expandedState: TreeExpandedState;

  /** An array of selected nodes values */
  selectedState: string[];

  /** An array of checked nodes values */
  checkedState: string[];

  /** A value of the node that was last clicked
   * Anchor node is used to determine range of selected nodes for multiple selection
   */
  anchorNode: string | null;

  /** Initializes tree state based on provided data, called automatically by the Tree component */
  initialize: (data: TreeNodeData[]) => void;

  /** Toggles expanded state of the node with provided value */
  toggleExpanded: (value: string) => void;

  /** Collapses node with provided value */
  collapse: (value: string) => void;

  /** Expands node with provided value */
  expand: (value: string) => void;

  /** Expands all nodes */
  expandAllNodes: () => void;

  /** Collapses all nodes */
  collapseAllNodes: () => void;

  /** Sets expanded state */
  setExpandedState: React.Dispatch<
    React.SetStateAction<TreeExpandedState>
  >;

  /** Toggles selected state of the node with provided value */
  toggleSelected: (value: string) => void;

  /** Selects node with provided value */
  select: (value: string) => void;

  /** Deselects node with provided value */
  deselect: (value: string) => void;

  /** Clears selected state */
  clearSelected: () => void;

  /** Sets selected state */
  setSelectedState: React.Dispatch<React.SetStateAction<string[]>>;

  /** Checks node with provided value */
  checkNode: (value: string) => void;

  /** Unchecks node with provided value */
  uncheckNode: (value: string) => void;

  /** Checks all nodes */
  checkAllNodes: () => void;

  /** Unchecks all nodes */
  uncheckAllNodes: () => void;

  /** Sets checked state */
  setCheckedState: React.Dispatch<React.SetStateAction<string[]>>;

  /** Returns all checked nodes with status */
  getCheckedNodes: () => CheckedNodeStatus[];

  /** Returns `true` if node with provided value is checked */
  isNodeChecked: (value: string) => boolean;

  /** Returns `true` if node with provided value is indeterminate */
  isNodeIndeterminate: (value: string) => boolean;

  /** Returns `true` if the node's children are currently being loaded */
  isNodeLoading: (value: string) => boolean;

  /** Returns the error from the last failed load attempt, or `null` */
  getNodeLoadError: (value: string) => Error | null;

  /** Programmatically triggers loading of a node's children */
  loadNode: (value: string) => Promise<void>;

  /** Clears the loaded cache for a node, causing it to re-fetch on next expand */
  invalidateNode: (value: string) => void;
}
```

You can pass the value returned by the `useTree` hook to the `tree` prop of the `Tree` component
to control tree state:

```tsx
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
```


## Checked state

`Tree` can be used to display checked state with checkboxes.
To implement checked state, you need to render `Checkbox.Indicator` in the `renderNode` function:

```tsx
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
```


To check/uncheck nodes, use `checkAllNodes` and `uncheckAllNodes` functions:

```tsx
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
```


## Check strictly

By default, checking a parent node also checks all of its children (and unchecking works
the same way). Set `checkStrictly: true` on `useTree` to make each node's checked state
fully independent – checking a parent does not affect children and vice versa.
In this mode, `isNodeIndeterminate` always returns `false`.

```tsx
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
```


## Initial expanded state

Expanded state is an object of `node.value` and boolean values that represent nodes expanded state.
To change initial expanded state, pass `initialExpandedState` to the `useTree` hook.
To generate expanded state from data with expanded nodes, you can use `getTreeExpandedState` function:
it accepts data and an array of expanded nodes values and returns expanded state object.

If `'*'` is passed as the second argument to `getTreeExpandedState`, all nodes will be expanded:

```tsx
import { getTreeExpandedState } from '@mantine/core';

// Expand two given nodes
getTreeExpandedState(data, ['src', 'src/components']);

// Expand all nodes
getTreeExpandedState(data, '*');
```

```tsx
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, ['src', 'src/components']),
  });

  return <Tree data={data} tree={tree} />;
}
```


## Async loading

`Tree` supports lazy loading of children. Set `hasChildren: true` on a node without providing `children` –
when the node is expanded for the first time, `onLoadChildren` callback passed to `useTree` is called.
Use the `mergeAsyncChildren` utility to splice loaded children into your data:

```tsx
import { mergeAsyncChildren, Tree, TreeNodeData, useTree } from '@mantine/core';

function Demo() {
  const [data, setData] = useState<TreeNodeData[]>([
    { label: 'Documents', value: 'documents', hasChildren: true },
  ]);

  const tree = useTree({
    onLoadChildren: async (value) => {
      const children = await fetchChildren(value);
      setData((prev) => mergeAsyncChildren(prev, value, children));
    },
  });

  return <Tree data={data} tree={tree} />;
}
```

The `renderNode` payload includes `isLoading` and `loadError` fields that you can use
to display a loading indicator or an error message. Use `tree.invalidateNode(value)` to clear
the cache for a node and allow re-fetching on next expand.

```tsx
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
    { label: `${parentValue}/file-1.txt`, value: `${parentValue}/file-1.txt` },
    { label: `${parentValue}/file-2.txt`, value: `${parentValue}/file-2.txt` },
    {
      label: `${parentValue}/subfolder`,
      value: `${parentValue}/subfolder`,
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
```


## Search and filter

`Tree` does not include built-in search controls – search input and filtering logic are always external.
Use the `filterTreeData` utility to filter tree data based on a search query. The function
accepts tree data, a query string, and an optional custom filter function:

```tsx
import { filterTreeData } from '@mantine/core';

// Filter with default case-insensitive label matching
const filtered = filterTreeData(data, 'button');

// Filter with a custom function
const filtered = filterTreeData(data, 'btn', (query, node) =>
  node.value.includes(query)
);
```

The default filter compares the query against `node.label` (when it is a string) or `node.value` as a fallback.
Matching nodes and their ancestors are preserved in the result. You can provide a custom `TreeNodeFilter`
function for more advanced matching (for example, fuzzy search with fuse.js).

### Highlight matching nodes

In this example, all nodes remain visible and matching text is highlighted using the `Highlight` component
inside `renderNode`. Ancestor nodes of matching nodes are auto-expanded.

```tsx
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
```


### Filter non-matching nodes

In this example, non-matching branches are removed from the tree using `filterTreeData`.
The filtered tree is auto-expanded with `getTreeExpandedState(filteredData, '*')`.

```tsx
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
```


### Fuzzy search with fuse.js

You can pass a custom filter function to `filterTreeData` for fuzzy matching. This example
uses [fuse.js](https://www.fusejs.io/):

```tsx
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
```


## Drag and drop

`Tree` component supports drag-and-drop reordering of nodes. To enable it, provide `onDragDrop` callback.
The callback receives an object with `draggedNode` (value of the dragged node), `targetNode` (value of the node it was dropped on),
and `position` (`'before'`, `'after'`, or `'inside'`).

Use `moveTreeNode` utility function to update the data based on the drag-and-drop result:

```tsx
import { moveTreeNode, Tree, TreeNodeData } from '@mantine/core';

function Demo() {
  const [data, setData] = useState<TreeNodeData[]>(initialData);

  return (
    <Tree
      data={data}
      onDragDrop={(payload) =>
        setData((current) => moveTreeNode(current, payload))
      }
    />
  );
}
```

When dragging over a node, the drop position is determined by cursor position:

* **Top zone** – drop before the target node (shown as a line above)
* **Middle zone** – drop inside the target node as a child (shown as a background highlight, only for nodes with children)
* **Bottom zone** – drop after the target node (shown as a line below)

Nodes cannot be dropped onto their own descendants.

```tsx
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
```


## Connecting lines

Set `withLines` prop to display connecting lines showing parent-child relationships.
Lines adapt to `levelOffset` spacing automatically.

```tsx
import { getTreeExpandedState, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
  });

  return <Tree data={data} tree={tree} withLines />;
}
```


## Virtualization

`Tree` does not depend on any virtualization library – you supply one yourself.
Use the `flattenTreeData` utility to convert hierarchical data into a flat list of
visible nodes based on the current expanded state, then render each node with
`FlatTreeNode` which provides Tree's styles, aria attributes, click/keyboard
handlers, and `renderNode` support.

```tsx
import { FlatTreeNode, flattenTreeData, useTree } from '@mantine/core';

const tree = useTree();
const flatList = flattenTreeData(data, tree.expandedState);
// flatList is FlattenedTreeNodeData[] – spread each entry into FlatTreeNode
```

`FlatTreeNode` accepts the same behavioral props as `Tree` (`expandOnClick`,
`selectOnClick`, `expandOnSpace`, `checkOnSpace`, `renderNode`) and a `style` prop
for virtualizer positioning. The container element must have `data-tree-root`
and `role="tree"` attributes for keyboard navigation to work.

```tsx
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
        label: `${hasChild ? 'Folder' : 'File'} ${id}`,
        value: `node-${id}`,
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
              transform: `translateY(${virtualItem.start}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
```


## Example: files tree

```tsx
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
```



#### Props

**Tree props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowRangeSelection | boolean | - | If set, tree nodes range can be selected with click when `Shift` key is pressed |
| checkOnSpace | boolean | - | If set, tree node is checked on space key press |
| clearSelectionOnOutsideClick | boolean | - | If set, selection is cleared when user clicks outside of the tree |
| data | TreeNodeData[] | required | Data used to render nodes |
| expandOnClick | boolean | - | If set, tree node with children is expanded on click |
| expandOnSpace | boolean | - | If set, tree node with children is expanded on space key press |
| keepMounted | boolean | - | If set, subtree content is kept mounted when collapsed. React 19 `Activity` is used to preserve state. |
| levelOffset | MantineSpacing | - | Horizontal padding of each subtree level, key of `theme.spacing` or any valid CSS value |
| onDragDrop | (payload: TreeDragDropPayload) => void | - | Called when a node is dropped on another node, enables drag-and-drop when provided |
| renderNode | RenderNode | - | A function to render tree node label |
| selectOnClick | boolean | - | If set, tree node is selected on click |
| tree | UseTreeReturnType | - | Use-tree hook instance that can be used to manipulate component state |
| withLines | boolean | - | If set, connecting lines are rendered showing parent-child relationships |

**Tree.map props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| aspectRatio | number | - | The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given |
| autoContrast | boolean | - | Determines whether text color should be adjusted based on background color to improve contrast |
| children | React.ReactNode | - | Additional elements rendered inside `Treemap` component |
| data | TreemapData[] | required | Data used to render chart |
| dataKey | string | - | Key in data object for the value |
| height | number | - | Controls chart height |
| strokeColor | MantineColor | - | Controls color of the node stroke, by default depends on color scheme |
| strokeWidth | number | - | Controls width of node stroke |
| textColor | MantineColor | - | Controls text color of labels |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipProps | RechartsProps | - | Props passed down to `Tooltip` recharts component |
| treemapProps | Partial<Omit<Props<TreemapDataType, any>, "data" \| "ref" \| "dataKey">> | - | Props passed down to recharts `Treemap` component |
| valueFormatter | (value: number) => string | - | A function to format values inside the tooltip |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when a node is hovered |


#### Styles API

Tree component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Tree selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Tree-root | Root element |
| node | .mantine-Tree-node | Node element (li), contains label and subtree elements |
| subtree | .mantine-Tree-subtree | Subtree element (ul) |
| label | .mantine-Tree-label | Node label |

**Tree CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --level-offset | Controls offset of nested tree levels |

**Treemap selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Treemap-root | Root element |
| tooltip | .mantine-Treemap-tooltip | Tooltip root element |
| tooltipBody | .mantine-Treemap-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-Treemap-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-Treemap-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-Treemap-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-Treemap-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-Treemap-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-Treemap-tooltipLabel | Label of the tooltip |

**Treemap CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-stroke-color | Controls color of the chart stroke |
| root | --chart-height | Controls height of the chart |

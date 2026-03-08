import { useMemo, useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { Highlight, Stack, Text, TextInput } from '../..';
import { Button } from '../Button';
import { Group } from '../Group';
import { defaultTreeNodeFilter, filterTreeData } from './filter-tree-data/filter-tree-data';
import { mergeAsyncChildren } from './merge-async-children/merge-async-children';
import { moveTreeNode, TreeDragDropPayload } from './move-tree-node/move-tree-node';
import { Tree, TreeNodeData } from './Tree';
import { getTreeExpandedState, useTree } from './use-tree';

export default { title: 'Tree' };

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
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      { label: 'react', value: 'node_modules/react' },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          { label: 'core', value: 'node_modules/@mantine/core' },
          { label: 'hooks', value: 'node_modules/@mantine/hooks' },
          { label: 'form', value: 'node_modules/@mantine/form' },
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
];

export function Usage() {
  const tree = useTree();
  return (
    <div style={{ padding: 40 }}>
      <Tree data={data} tree={tree} />
    </div>
  );
}

export function Controller() {
  const [expandedState, setExpandedState] = useState(getTreeExpandedState(data, '*'));
  const tree = useTree({
    onNodeCollapse: (value) => console.log('Node collapsed:', value),
    onNodeExpand: (value) => console.log('Node expanded:', value),
    expandedState,
    onExpandedStateChange: setExpandedState,
  });

  console.log('render');

  return (
    <div style={{ padding: 40 }}>
      <Tree data={data} tree={tree} />
      <Button onClick={() => tree.expandAllNodes()}>Expand all</Button>
      <Button onClick={() => tree.collapseAllNodes()}>Collapse all</Button>
      <Button onClick={() => setExpandedState(getTreeExpandedState(data, '*'))}>
        Expand external
      </Button>
    </div>
  );
}

export function RenderNode() {
  const tree = useTree();
  return (
    <div style={{ padding: 40 }}>
      <Tree
        tree={tree}
        data={data}
        renderNode={({ node, expanded, hasChildren, elementProps }) => (
          <Group gap="xs" {...elementProps}>
            <span>{node.label}</span>
            {hasChildren && (
              <CaretDownIcon
                size={18}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
          </Group>
        )}
      />
    </div>
  );
}

export function ExpandOnDoubleClick() {
  const tree = useTree();

  return (
    <div style={{ padding: 40 }}>
      <Tree
        tree={tree}
        data={data}
        expandOnClick={false}
        style={{ userSelect: 'none' }}
        renderNode={({ node, expanded, hasChildren, elementProps }) => (
          <Group gap="xs" {...elementProps} onDoubleClick={() => tree.toggleExpanded(node.value)}>
            <span>{node.label}</span>
            {hasChildren && (
              <CaretDownIcon
                size={18}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
          </Group>
        )}
      />
    </div>
  );
}

export function WithActivityStatePreservation() {
  const tree = useTree({ initialExpandedState: { src: true, 'src/components': true } });
  const [lastExpanded, setLastExpanded] = useState<string | null>(null);

  return (
    <Stack p={40} maw={500}>
      <Text size="sm" c="dimmed">
        <strong>keepMounted + Activity</strong>: subtree content is kept mounted when nodes are
        collapsed. Collapse and re-expand nodes — child state (if any) is preserved.
      </Text>

      <Tree
        data={data}
        tree={tree}
        keepMounted
        renderNode={({ node, expanded, hasChildren, elementProps }) => (
          <Group
            gap="xs"
            {...elementProps}
            onClick={(e) => {
              elementProps.onClick(e);
              if (hasChildren) {
                setLastExpanded(node.value);
              }
            }}
          >
            <span>{node.label}</span>
            {hasChildren && (
              <CaretDownIcon
                size={18}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
          </Group>
        )}
      />

      {lastExpanded && (
        <Text size="xs" c="dimmed">
          Last toggled: <strong>{lastExpanded}</strong>
        </Text>
      )}
    </Stack>
  );
}

export function SelectOnClick() {
  const tree = useTree();

  return (
    <div style={{ padding: 40 }}>
      <Tree
        tree={tree}
        data={data}
        selectOnClick
        expandOnSpace={false}
        clearSelectionOnOutsideClick
        renderNode={({ node, expanded, hasChildren, elementProps }) => (
          <Group gap="xs" {...elementProps} onDoubleClick={() => tree.toggleExpanded(node.value)}>
            <span>{node.label}</span>
            {hasChildren && (
              <CaretDownIcon
                size={18}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
          </Group>
        )}
      />
    </div>
  );
}

export function DragDrop() {
  const [treeData, setTreeData] = useState(data);
  const tree = useTree({ initialExpandedState: getTreeExpandedState(data, '*') });

  const handleDragDrop = (payload: TreeDragDropPayload) => {
    setTreeData((current) => moveTreeNode(current, payload));
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Tree
        data={treeData}
        tree={tree}
        onDragDrop={handleDragDrop}
        renderNode={({ node, expanded, hasChildren, elementProps }) => (
          <Group gap="xs" {...elementProps}>
            <span>{node.label}</span>
            {hasChildren && (
              <CaretDownIcon
                size={18}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
          </Group>
        )}
      />
    </div>
  );
}

export function DragDropWithRenderNode() {
  const [treeData, setTreeData] = useState(data);
  const tree = useTree({ initialExpandedState: getTreeExpandedState(data, '*') });

  const handleDragDrop = (payload: TreeDragDropPayload) => {
    console.log('Drop:', payload);
    setTreeData((current) => moveTreeNode(current, payload));
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Tree data={treeData} tree={tree} onDragDrop={handleDragDrop} />
    </div>
  );
}

function generateLargeTree(count: number): TreeNodeData[] {
  const result: TreeNodeData[] = [];
  let id = 0;

  function addChildren(parent: TreeNodeData[], depth: number, remaining: { count: number }) {
    const childCount = depth === 0 ? 10 : Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < childCount && remaining.count > 0; i++) {
      id++;
      remaining.count--;
      const nodeValue = `node-${id}`;
      const hasChildren = depth < 4 && remaining.count > 0 && Math.random() > 0.4;
      const node: TreeNodeData = {
        label: `${hasChildren ? 'Folder' : 'File'} ${id}`,
        value: nodeValue,
        children: hasChildren ? [] : undefined,
      };

      if (hasChildren) {
        addChildren(node.children!, depth + 1, remaining);
      }

      parent.push(node);
    }
  }

  addChildren(result, 0, { count });
  return result;
}

const largeData = generateLargeTree(1000);

export function LargeTreeNoDragDrop() {
  const tree = useTree({ initialExpandedState: getTreeExpandedState(largeData, '*') });

  return (
    <div style={{ padding: 40, maxWidth: 500, height: '100vh', overflow: 'auto' }}>
      <Text size="sm" c="dimmed" mb="md">
        1000 nodes, all expanded, no drag-and-drop
      </Text>
      <Tree data={largeData} tree={tree} />
    </div>
  );
}

export function AsyncLoading() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>([
    {
      label: 'Documents',
      value: 'documents',
      hasChildren: true,
    },
    {
      label: 'Images',
      value: 'images',
      hasChildren: true,
    },
    { label: 'readme.md', value: 'readme.md' },
  ]);

  const tree = useTree({
    onLoadChildren: async (value) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });
      const children: TreeNodeData[] = [
        { label: `${value}/file1.txt`, value: `${value}/file1.txt` },
        { label: `${value}/file2.txt`, value: `${value}/file2.txt` },
        {
          label: `${value}/subfolder`,
          value: `${value}/subfolder`,
          hasChildren: true,
        },
      ];
      setTreeData((prev) => mergeAsyncChildren(prev, value, children));
    },
  });

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Tree
        data={treeData}
        tree={tree}
        renderNode={({ node, expanded, hasChildren: hc, elementProps, isLoading }) => (
          <Group gap="xs" {...elementProps}>
            {isLoading ? (
              <Text size="sm" c="dimmed">
                Loading...
              </Text>
            ) : (
              <>
                <span>{node.label}</span>
                {hc && (
                  <CaretDownIcon
                    size={18}
                    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                )}
              </>
            )}
          </Group>
        )}
      />
    </div>
  );
}

export function AsyncLoadingDefault() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>([
    { label: 'Documents', value: 'documents', hasChildren: true },
    { label: 'Images', value: 'images', hasChildren: true },
    { label: 'readme.md', value: 'readme.md' },
  ]);

  const tree = useTree({
    onLoadChildren: async (value) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      setTreeData((prev) =>
        mergeAsyncChildren(prev, value, [
          { label: `${value}/file1.txt`, value: `${value}/file1.txt` },
          { label: `${value}/file2.txt`, value: `${value}/file2.txt` },
          { label: `${value}/nested`, value: `${value}/nested`, hasChildren: true },
        ])
      );
    },
  });

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Text size="sm" c="dimmed" mb="md">
        Default rendering (no renderNode) with async loading
      </Text>
      <Tree data={treeData} tree={tree} />
    </div>
  );
}

export function AsyncLoadingWithError() {
  const [treeData, setTreeData] = useState<TreeNodeData[]>([
    { label: 'Will succeed', value: 'success', hasChildren: true },
    { label: 'Will fail', value: 'fail', hasChildren: true },
    { label: 'readme.md', value: 'readme.md' },
  ]);

  const tree = useTree({
    onLoadChildren: async (value) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      if (value === 'fail') {
        throw new Error('Network error');
      }

      setTreeData((prev) =>
        mergeAsyncChildren(prev, value, [
          { label: `${value}/file1.txt`, value: `${value}/file1.txt` },
        ])
      );
    },
  });

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Tree
        data={treeData}
        tree={tree}
        renderNode={({ node, expanded, hasChildren: hc, elementProps, isLoading, loadError }) => (
          <Group gap="xs" {...elementProps}>
            <span>{node.label}</span>
            {hc && !isLoading && !loadError && (
              <CaretDownIcon
                size={18}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
            {isLoading && (
              <Text size="xs" c="dimmed">
                Loading...
              </Text>
            )}
            {loadError && (
              <Text
                size="xs"
                c="red"
                onClick={(e) => {
                  e.stopPropagation();
                  tree.invalidateNode(node.value);
                  tree.loadNode(node.value);
                }}
                style={{ cursor: 'pointer' }}
              >
                Error! Click to retry
              </Text>
            )}
          </Group>
        )}
      />
    </div>
  );
}

export function AsyncLoadingWithInvalidation() {
  let counter = 0;
  const [treeData, setTreeData] = useState<TreeNodeData[]>([
    { label: 'Dynamic folder', value: 'dynamic', hasChildren: true },
  ]);

  const tree = useTree({
    onLoadChildren: async (value) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
      counter++;
      setTreeData((prev) =>
        mergeAsyncChildren(prev, value, [
          { label: `item-${counter}-a`, value: `${value}/item-${counter}-a` },
          { label: `item-${counter}-b`, value: `${value}/item-${counter}-b` },
        ])
      );
    },
  });

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Button
        onClick={() => {
          tree.invalidateNode('dynamic');
          setTreeData([{ label: 'Dynamic folder', value: 'dynamic', hasChildren: true }]);
          tree.collapse('dynamic');
        }}
        mb="md"
      >
        Invalidate & reload
      </Button>
      <Tree data={treeData} tree={tree} />
    </div>
  );
}

export function LargeTreeWithDragDrop() {
  const [treeData, setTreeData] = useState(largeData);
  const tree = useTree({ initialExpandedState: getTreeExpandedState(largeData, '*') });

  return (
    <div style={{ padding: 40, maxWidth: 500, height: '100vh', overflow: 'auto' }}>
      <Text size="sm" c="dimmed" mb="md">
        1000 nodes, all expanded, with drag-and-drop
      </Text>
      <Tree
        data={treeData}
        tree={tree}
        onDragDrop={(payload) => setTreeData((current) => moveTreeNode(current, payload))}
      />
    </div>
  );
}

function getMatchingAncestors(nodes: TreeNodeData[], query: string): string[] {
  const result: string[] = [];
  for (const node of nodes) {
    const childMatches = node.children ? getMatchingAncestors(node.children, query) : [];
    if (defaultTreeNodeFilter(query, node) || childMatches.length > 0) {
      result.push(node.value, ...childMatches);
    }
  }
  return result;
}

export function SearchHighlight() {
  const [search, setSearch] = useState('');
  const tree = useTree({ initialExpandedState: getTreeExpandedState(data, []) });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      tree.setExpandedState(getTreeExpandedState(data, getMatchingAncestors(data, value)));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TextInput
        placeholder="Search (highlight)..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        data={data}
        tree={tree}
        renderNode={({ node, elementProps }) => {
          const label = typeof node.label === 'string' ? node.label : node.value;
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

export function SearchFilter() {
  const [search, setSearch] = useState('');
  const tree = useTree();

  const filteredData = useMemo(() => filterTreeData(data, search), [search]);

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
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TextInput
        placeholder="Search (filter)..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree data={filteredData} tree={tree} />
    </div>
  );
}

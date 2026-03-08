import { useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack, Text } from '../..';
import { Button } from '../Button';
import { Group } from '../Group';
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

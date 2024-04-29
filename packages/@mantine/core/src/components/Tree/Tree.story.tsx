import { IconChevronDown } from '@tabler/icons-react';
import { Button } from '../Button';
import { Group } from '../Group';
import { Tree, TreeNodeData } from './Tree';
import { useTree } from './use-tree';

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
  return (
    <div style={{ padding: 40 }}>
      <Tree data={data} />
    </div>
  );
}

export function Controller() {
  const tree = useTree();
  return (
    <div style={{ padding: 40 }}>
      <Tree data={data} tree={tree} />
      <Button onClick={() => tree.expandAllNodes()}>Expand all</Button>
      <Button onClick={() => tree.collapseAllNodes()}>Collapse all</Button>
    </div>
  );
}

export function RenderNode() {
  return (
    <div style={{ padding: 40 }}>
      <Tree
        data={data}
        expandOnClick={false}
        renderNode={({ node, expanded, hasChildren }) => (
          <Group gap="xs">
            <span>{node.label}</span>
            {hasChildren && (
              <IconChevronDown
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
